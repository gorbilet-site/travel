/* eslint-disable @next/next/no-img-element */
import { typo } from "@/lib/typo";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE}${path}`;

const NAV = [
  { href: "#cities", label: "Города" },
  { href: "#offers", label: "Наш топ" },
  { href: "#agents", label: "Ваши поездки" },
  { href: "#socials", label: "Мы в сети" },
];

/* Секция приветствия. Подписей нет — снимки говорят сами за себя,
   описание остаётся в alt для читалок и поиска. */
const HERO_PHOTOS = [
  {
    src: "/images/hero-gnome.webp",
    alt: "Бронзовая фигурка на перилах моста, увешанных замочками влюблённых",
  },
  {
    src: "/images/hero-syrniki.webp",
    alt: "Сырники со сметаной и ягодным соусом в кафе народной кухни",
  },
  {
    src: "/images/hero-chapel.webp",
    alt: "Готическая капелла в парке, над деревьями радуга",
  },
  {
    src: "/images/hero-view.webp",
    alt: "Кадр из поездки",
  },
];

const CITIES = [
  { name: "Москва", href: "https://gorbilet.ru/go/OH4NtB" },
  { name: "Петербург", href: "https://gorbilet.ru/go/dRaj6P" },
  { name: "Нижний Новгород", href: "https://gorbilet.ru/go/vNHwYL" },
  { name: "Калининград", href: "https://gorbilet.ru/go/YghnGq" },
  { name: "Казань", href: "https://gorbilet.ru/go/SJ1JYU" },
  { name: "Сочи", href: "https://gorbilet.ru/go/kUsL1A" },
  { name: "Выборг", href: "https://gorbilet.ru/go/HPlRLU" },
];

const OFFERS = [
  {
    city: "Петербург",
    title: "Корабли на развод мостов в Петербурге",
    href: "https://gorbilet.ru/go/8TM7gB",
  },
  {
    city: "Москва",
    title: "Теплоход за 99 ₽ в Москве",
    href: "https://gorbilet.ru/go/I7EWC5",
  },
  {
    city: "Нижний Новгород",
    title: "Экскурсия с канатной дорогой в Нижнем Новгороде",
    href: "https://gorbilet.ru/go/o0uKCk",
  },
  {
    city: "Калининград",
    title: "Поездка в сыроварню в Калининграде",
    href: "https://gorbilet.ru/go/MIlPKt",
  },
  {
    city: "Казань",
    title: "Вся Казань с дегустацией",
    href: "https://gorbilet.ru/go/bcrhdG",
  },
];

/* Только кадры с людьми: секция про путешественников, а не про пейзажи. */
const AGENT_SHOTS = [
  { src: "/images/agent-forest.webp", alt: "Туристка во время поездки в оленьем парке" },
  { src: "/images/agent-heic.webp", alt: "Туристка на смотровой площадке у моря" },
  { src: "/images/agent-boat-selfie.webp", alt: "Туристка во время прогулки на теплоходе" },
  { src: "/images/traveler-mother-daughter.webp", alt: "Мама с дочкой отдыхают на палубе теплохода" },
  { src: "/images/agent-trip.webp", alt: "Туристка в зелёном платье на смотровой площадке над лесом и морем" },
  { src: "/images/agent-cliff.webp", alt: "Туристка на скалистом берегу над морем" },
];

const SOCIALS = [
  {
    name: "Telegram",
    handle: "@gorbilet_travel",
    href: "https://t.me/gorbilet_travel",
    icon: "/social/telegram.svg",
  },
  {
    name: "MAX",
    handle: "gorbilet_travel",
    href: "https://max.ru/gorbilet_travel",
    icon: "/social/max.svg",
  },
  {
    name: "ВКонтакте",
    handle: "gorbilet_travel",
    href: "https://vk.ru/gorbilet_travel",
    icon: "/social/vk.svg",
  },
];

function Arrow({ dir = "out" }: { dir?: "out" | "down" }) {
  return (
    <span className="arrow" aria-hidden="true">
      {dir === "out" ? "↗" : "↘"}
    </span>
  );
}

export default function Page() {
  return (
    <main className="site-shell" id="top">
      <header className="site-nav">
        <a className="nav-brand" href="#top" aria-label="Горбилет — на главную">
          <img
            className="brand-logo"
            src={asset("/brand/gorbilet-white.svg")}
            alt="Горбилет"
          />
        </a>
        <nav className="nav-links" aria-label="Навигация по сайту">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ПРИВЕТСТВИЕ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-intro">
          <h1 className="hero-title" id="hero-title">
            Куда
            <br />
            махнём?
          </h1>
        </div>

        <div className="hero-grid">
          <ul className="hero-collage" aria-label="Кадры из поездок">
            {HERO_PHOTOS.map((photo) => (
              <li className="hero-photo" key={photo.src}>
                <img src={asset(photo.src)} alt={photo.alt} loading="eager" />
              </li>
            ))}
          </ul>

          <div className="hero-story">
            <h2>{typo("Идеи для тех, кому не сидится")}</h2>
            <p>
              {typo(
                "Выбирайте город, ловите впечатления и сохраняйте планы на следующую поездку. Мы собрали интересные варианты — вам остаётся решить, куда ехать.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ГОРОДА */}
      <section className="section cities" id="cities" aria-labelledby="cities-title">
        <div className="section-heading">
          <h2 id="cities-title">7 городов</h2>
          <p>
            {typo(
              "От Москвы до камерного Выборга — выбирайте город для следующей поездки",
            )}
          </p>
        </div>

        <ul className="city-index">
          {CITIES.map((city) => (
            <li key={city.name}>
              <a
                className="city-row"
                href={city.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть предложения в городе ${city.name}`}
              >
                <strong>{typo(city.name)}</strong>
                <Arrow dir="down" />
              </a>
            </li>
          ))}
        </ul>

        <a
          className="editorial-link"
          href="https://gorbilet.ru/go/sdu4nZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Все города <Arrow />
        </a>
      </section>

      {/* ТОП 5 */}
      <section className="section offers" id="offers" aria-labelledby="offers-title">
        <div className="section-heading">
          <h2 id="offers-title">Топ 5</h2>
          <p>{typo("Пять маршрутов, чтобы запланировать поездку прямо сейчас")}</p>
        </div>

        <ol className="offer-list">
          {OFFERS.map((offer, index) => (
            <li key={offer.href}>
              <a
                className="offer-card"
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${offer.title}, ${offer.city}`}
              >
                <span className="offer-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="offer-copy">
                  <span className="offer-city">{typo(offer.city)}</span>
                  <h3>{typo(offer.title)}</h3>
                </span>
                <span className="offer-action">
                  Открыть <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ВАШИ ПОЕЗДКИ */}
      <section className="section agents" id="agents" aria-labelledby="agents-title">
        <div className="section-heading">
          <h2 id="agents-title">{typo("Счастливые вы в поездках")}</h2>
          <p>
            {typo(
              "Смотрите, как прошли поездки у тех, кто решился. Следующая счастливая история может быть вашей.",
            )}
          </p>
        </div>

        <ul className="agent-collage" aria-label="Фотографии из поездок">
          {AGENT_SHOTS.map((shot) => (
            <li className="agent-shot" key={shot.src}>
              <img src={asset(shot.src)} alt={shot.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      {/* СОЦСЕТИ */}
      <section className="section socials" id="socials" aria-labelledby="socials-title">
        <div className="section-heading">
          <h2 id="socials-title">Мы в сети</h2>
          <p>
            {typo(
              "Больше маршрутов, скидок и поводов сорваться в поездку — в наших социальных сетях.",
            )}
          </p>
        </div>

        <ul className="social-list">
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a
                className="social-link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-mark" aria-hidden="true">
                  <img src={asset(social.icon)} alt="" />
                </span>
                <span className="social-copy">
                  <strong>{social.name}</strong>
                  <small>{social.handle}</small>
                </span>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Горбилет — наверх">
          <img
            className="brand-logo"
            src={asset("/brand/gorbilet-white.svg")}
            alt="Горбилет"
          />
        </a>
        <span>© 2026 / Горбилет / путешествия</span>
      </footer>
    </main>
  );
}
