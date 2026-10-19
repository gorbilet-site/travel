/* eslint-disable @next/next/no-img-element */
import { typo } from "@/lib/typo";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE}${path}`;

const CITIES = [
  { name: "Москва", href: "https://gorbilet.ru/go/OH4NtB" },
  { name: "Петербург", href: "https://gorbilet.ru/go/dRaj6P" },
  { name: "Нижний Новгород", href: "https://gorbilet.ru/go/vNHwYL" },
  { name: "Калининград", href: "https://gorbilet.ru/go/YghnGq" },
  { name: "Казань", href: "https://gorbilet.ru/go/SJ1JYU" },
  { name: "Сочи", href: "https://gorbilet.ru/go/kUsL1A" },
  { name: "Выборг", href: "https://gorbilet.ru/go/HPlRLU" },
];

const HERO_PHOTOS = [
  { src: "/images/hero-gnome.webp", alt: "Бронзовый хомлин на перилах моста в Калининграде", width: 900, height: 1200 },
  { src: "/images/hero-church.jpg", alt: "Краснокирпичная колокольня с золотым шпилем на фоне синего неба", width: 960, height: 1280 },
  { src: "/images/hero-chapel.webp", alt: "Готическая капелла в парке под радугой", width: 900, height: 1200 },
  { src: "/images/hero-view.webp", alt: "Дворец земледельцев в Казани", width: 900, height: 1200 },
];

// Checked on the linked offer pages on 2026-10-19.
// Old and new prices refer to the SAME ticket category.
const OFFERS = [
  {
    city: "Москва", kind: "chocolate", theme: "Попробовать новое",
    title: "Фабрика «Красный Октябрь»",
    description: "Экскурсия с шоколадным мастер-классом. Создайте свой десерт и заберите его с собой.",
    href: "https://gorbilet.ru/go/NQAdAH", oldPrice: 2500, price: 1500, discount: 40, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Петербург", kind: "bus", theme: "Влюбиться в город",
    title: "По главным местам Петербурга",
    description: "Автобусная экскурсия: знакомые силуэты, панорамы Невы и истории Северной столицы.",
    href: "https://gorbilet.ru/go/OWemZh", oldPrice: 1200, price: 590, discount: 50, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Нижний Новгород", kind: "route", theme: "Свернуть с привычного пути",
    title: "Нижний и Печерский монастырь",
    description: "Обзорная экскурсия по городу с посещением монастыря и прогулкой по Рождественской улице.",
    href: "https://gorbilet.ru/go/o0uKCk", oldPrice: 1900, price: 1615, discount: 15, priceLabel: "Взрослый билет",
  },
  {
    city: "Калининград", kind: "castle", theme: "Уехать за впечатлениями",
    title: "Замок Шаакен и сыроварня",
    description: "Автобусная поездка к средневековому замку Шаакен и в сыроварню «Шаакендорф».",
    href: "https://gorbilet.ru/go/MIlPKt", oldPrice: 1500, price: 1200, discount: 20, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Казань", kind: "cup", theme: "Узнать город на вкус",
    title: "Вся Казань за один день",
    description: "Главные места города, Казанский кремль и чаепитие с дегустацией татарских сладостей.",
    href: "https://gorbilet.ru/go/bcrhdG", oldPrice: 2375, price: 1900, discount: 20, priceLabel: "Взрослый билет",
  },
];

const SOCIALS = [
  { name: "Telegram", handle: "@gorbilet_travel", href: "https://t.me/gorbilet_travel", icon: "/social/telegram.svg" },
  { name: "MAX", handle: "gorbilet_travel", href: "https://max.ru/gorbilet_travel", icon: "/social/max.svg" },
  { name: "ВКонтакте", handle: "gorbilet_travel", href: "https://vk.ru/gorbilet_travel", icon: "/social/vk.svg" },
];
const money = (value: number) => `${new Intl.NumberFormat("ru-RU").format(value)}\u00a0₽`;

function Arrow() {
  return <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}
function ExperienceIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    chocolate: <><rect x="16" y="8" width="32" height="48" rx="6" transform="rotate(12 32 32)" /><path d="m22 17 20 4m-22 6 20 4m-22 6 20 4m-22 6 20 4M34 14l-8 37" /></>,
    bus: <><rect x="10" y="12" width="44" height="38" rx="8" /><path d="M10 34h44M32 13v21M20 7h24M17 50v7m30-7v7M5 23v11m54-11v11" /><circle cx="20" cy="42" r="2" /><circle cx="44" cy="42" r="2" /></>,
    route: <><path d="M13 15h27a10 10 0 0 1 0 20H24a10 10 0 0 0 0 20h24" strokeDasharray="4 5" /><circle cx="12" cy="15" r="6" /><path d="M50 27c-6 0-10 4-10 10 0 8 10 16 10 16s10-8 10-16c0-6-4-10-10-10Z" /><circle cx="50" cy="37" r="3" /></>,
    castle: <><path d="M11 56V22h10v8h8V12h6v18h8v-8h10v34ZM7 22l9-12 9 12M39 22l9-12 9 12M26 12l6-8 6 8M26 56V43a6 6 0 0 1 12 0v13" /></>,
    cup: <><path d="M10 27h34v12a17 17 0 0 1-34 0ZM44 29h6a8 8 0 0 1 0 16h-7M7 58h43M20 19c-8-7 7-9 0-16m12 16c-8-7 7-9 0-16" /></>,
  };
  return <svg className="experience-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export default function Page() {
  return (
    <main className="site-shell" id="top">
      <a className="skip-link" href="#cities">Перейти к маршрутам</a>
      <header className="site-nav">
        <a className="nav-brand" href="#top" aria-label="Горбилет — на главную">
          <img className="brand-logo" src={asset("/brand/gorbilet-white.svg")} alt="Горбилет" width="1480" height="254" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-heading">
          <div>
            <p className="eyebrow">Города ближе. Впечатлений больше.</p>
            <h1 id="hero-title"><span>Ваш проводник</span><span>по впечатлениям</span></h1>
          </div>
        </div>
        <div className="photo-album">
          <ul className="hero-collage" aria-label="Кадры из наших поездок">
            {HERO_PHOTOS.map((photo, index) => (
              <li className={`hero-photo hero-photo-${index + 1}`} key={photo.src}>
                <img src={asset(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} loading={index < 2 ? "eager" : "lazy"} fetchPriority={index === 1 ? "high" : "auto"} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-story">
          <h2><span>Помогаем</span><span>{typo("не пропускать жизнь")}</span></h2>
          <p>{typo("Выбирайте город, ловите впечатления и сохраняйте планы на следующую поездку. Мы собрали интересные варианты — вам остаётся решить, куда ехать.")}</p>
        </div>
      </section>

      <section className="section cities" id="cities" aria-labelledby="cities-title">
        <div className="section-heading">
          <h2 id="cities-title"><span>Постройте</span><span>маршрут</span></h2>
          <p>{typo("От Калининграда до Владивостока — выбирайте город для следующей поездки")}</p>
        </div>
        <div className="route-map">
          <ul className="city-index">
            {CITIES.map((city) => (
              <li key={city.name}>
                <a className="city-stop" href={city.href} target="_blank" rel="noopener noreferrer">
                  <span className="stop-dot" aria-hidden="true" /><strong>{city.name}</strong><Arrow />
                </a>
              </li>
            ))}
          </ul>
          <a className="all-cities" href="https://gorbilet.ru/go/sdu4nZ" target="_blank" rel="noopener noreferrer">Все города <Arrow /></a>
        </div>
      </section>

      <section className="section offers" id="offers" aria-labelledby="offers-title">
        <div className="offers-heading">
          <h2 id="offers-title"><span className="top-label">Топ 5</span><span>поводов</span><span>{typo("выйти из дома")}</span></h2>
          <p>{typo("Запланировать поездку прямо сейчас — проще, чем кажется. Выберите свой повод.")}</p>
        </div>
        <ol className="offer-list">
          {OFFERS.map((offer) => (
            <li key={offer.href}>
              <a className="offer-ticket" href={offer.href} target="_blank" rel="noopener noreferrer">
                <div className="ticket-main">
                  <div className="ticket-top"><span className="offer-city">{offer.city}</span><span className="discount">−{offer.discount}%</span></div>
                  <div className="ticket-mood"><ExperienceIcon kind={offer.kind} /><span>{typo(offer.theme)}</span></div>
                  <h3>{typo(offer.title)}</h3>
                  <p>{typo(offer.description)}</p>
                </div>
                <div className="ticket-stub">
                  <span className="price-label">{offer.priceLabel}</span>
                  <div className="price-pair"><span className="sr-only">До скидки: </span><s>{money(offer.oldPrice)}</s><span className="sr-only">Со скидкой: </span><strong>{money(offer.price)}</strong></div>
                  <span className="ticket-action">Выбрать дату <Arrow /></span>
                </div>
              </a>
            </li>
          ))}
        </ol>
        <p className="prices-note">{typo("Цены проверены 19 октября 2026. Стоимость зависит от даты и категории билета. Возможные доплаты и условия — на странице предложения.")}</p>
      </section>

      <section className="section socials" id="socials" aria-labelledby="socials-title">
        <div className="section-heading">
          <h2 id="socials-title">Мы в сети</h2>
          <p>{typo("Больше маршрутов, скидок и поводов сорваться в поездку — в наших социальных сетях.")}</p>
        </div>
        <ul className="social-list">
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a className="social-link" href={social.href} target="_blank" rel="noopener noreferrer">
                <img className="social-mark" src={asset(social.icon)} alt="" width="48" height="48" />
                <span className="social-copy"><strong>{social.name}</strong><small>{social.handle}</small></span><Arrow />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Горбилет — наверх"><img className="brand-logo" src={asset("/brand/gorbilet-white.svg")} alt="Горбилет" width="1480" height="254" /></a>
        <span>© 2026 Горбилет</span><a className="back-top" href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
