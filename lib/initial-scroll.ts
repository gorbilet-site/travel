// Runs in <head>, before the browser can follow an incoming section anchor.
// Only the initial visit is reset; in-page links and user scrolling still work.
export const initialScrollScript = `
(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search
    );
  }

  let pending = true;
  const reset = () => {
    if (pending) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const cancel = () => { pending = false; };
  const interactions = ["wheel", "touchstart", "pointerdown", "keydown", "hashchange"];
  for (const event of interactions) {
    window.addEventListener(event, cancel, { capture: true, passive: true });
  }
  document.addEventListener("DOMContentLoaded", reset, { once: true });
  window.addEventListener("pageshow", () => {
    reset();
    cancel();
    for (const event of interactions) {
      window.removeEventListener(event, cancel, true);
    }
    document.removeEventListener("DOMContentLoaded", reset);
  }, { once: true });
  reset();
})();
`;
