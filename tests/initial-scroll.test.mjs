import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = fs.readFileSync(new URL("../lib/initial-scroll.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const moduleScope = { exports: {} };
vm.runInNewContext(compiled, moduleScope);
const { initialScrollScript } = moduleScope.exports;

function eventTarget() {
  const listeners = new Map();
  return {
    addEventListener(name, callback, options) {
      const entries = listeners.get(name) || [];
      entries.push({ callback, once: options?.once });
      listeners.set(name, entries);
    },
    removeEventListener(name, callback) {
      listeners.set(name, (listeners.get(name) || []).filter(entry => entry.callback !== callback));
    },
    emit(name) {
      for (const entry of [...(listeners.get(name) || [])]) {
        entry.callback();
        if (entry.once) this.removeEventListener(name, entry.callback);
      }
    },
    count() {
      return [...listeners.values()].reduce((sum, entries) => sum + entries.length, 0);
    },
  };
}

function visit(hash = "", pathname = "/travel/") {
  const scrolls = [];
  const replacements = [];
  const historyState = { preserved: true };
  const document = eventTarget();
  const window = {
    ...eventTarget(),
    location: { pathname, search: "?utm_source=telegram", hash },
    history: {
      state: historyState,
      scrollRestoration: "auto",
      replaceState(state, title, url) {
        replacements.push({ state, title, url });
        window.location.hash = "";
      },
    },
    scrollTo(options) {
      scrolls.push(JSON.parse(JSON.stringify(options)));
    },
  };
  vm.runInNewContext(initialScrollScript, { window, document });
  return { window, document, scrolls, replacements, historyState };
}

test("fresh visit disables restored scrolling and starts at the first block", () => {
  const page = visit();
  assert.equal(page.window.history.scrollRestoration, "manual");
  assert.deepEqual(page.scrolls, [{ top: 0, left: 0, behavior: "instant" }]);
  assert.equal(page.replacements.length, 0);
  page.document.emit("DOMContentLoaded");
  page.window.emit("pageshow");
  assert.equal(page.scrolls.length, 3);
  assert.equal(page.window.count(), 0);
  assert.equal(page.document.count(), 0);
});

test("incoming offer anchors are cleared without changing the path, query or history state", () => {
  for (const pathname of ["/travel/", "/"]) {
    const page = visit("#offers", pathname);
    assert.deepEqual(page.replacements, [{
      state: page.historyState,
      title: "",
      url: `${pathname}?utm_source=telegram`,
    }]);
    assert.equal(page.window.location.hash, "");
  }
});

test("user interaction before load prevents a late jump back to the top", () => {
  for (const event of ["wheel", "touchstart", "pointerdown", "keydown", "hashchange"]) {
    const page = visit();
    page.window.emit(event);
    page.document.emit("DOMContentLoaded");
    page.window.emit("pageshow");
    assert.equal(page.scrolls.length, 1, event);
    assert.equal(page.window.count(), 0);
  }
});

test("in-page anchors and later pageshow events are not hijacked after entry", () => {
  const page = visit();
  page.document.emit("DOMContentLoaded");
  page.window.emit("pageshow");
  const before = page.scrolls.length;
  page.window.location.hash = "#cities";
  page.window.emit("hashchange");
  page.window.emit("pageshow");
  assert.equal(page.window.location.hash, "#cities");
  assert.equal(page.scrolls.length, before);
});
