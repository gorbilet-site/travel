/* eslint-disable @next/next/no-img-element */
import { typo } from "@/lib/typo";
import { HeroGallery } from "./components/hero-gallery";

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
  { src: "/images/hero-snowy-peaks.webp", alt: "Заснеженные горные вершины над смотровой площадкой", width: 1000, height: 1333 },
  { src: "/images/hero-autumn-canyon.webp", alt: "Озеро среди скал и осенних деревьев", width: 1000, height: 1333 },
  { src: "/images/hero-rocky-coast.webp", alt: "Путешественник в красной кепке на каменистом морском берегу", width: 960, height: 1280 },
  { src: "/images/hero-gnome.webp", alt: "Бронзовый хомлин на перилах моста в Калининграде", width: 900, height: 1200 },
  { src: "/images/hero-church.jpg", alt: "Краснокирпичная колокольня с золотым шпилем на фоне синего неба", width: 960, height: 1280 },
  { src: "/images/hero-city-sunset.webp", alt: "Огненный закат над стадионом и Лахта Центром в Петербурге", width: 1000, height: 1333 },
  { src: "/images/hero-chapel.webp", alt: "Готическая капелла в парке под радугой", width: 900, height: 1200 },
  { src: "/images/hero-view.webp", alt: "Дворец земледельцев в Казани", width: 900, height: 1200 },
  { src: "/images/hero-mountain-evening.webp", alt: "Огни курорта в горной долине на закате", width: 1000, height: 1333 },
  { src: "/images/hero-seaside-evening.webp", alt: "Вечернее солнце над морем и каменистой набережной", width: 787, height: 1400 },
  { src: "/images/hero-yellow-cabins.webp", alt: "Жёлтые кабинки канатной дороги на зелёном склоне", width: 788, height: 1400 },
];

// Checked on the linked offer pages on 2026-10-19.
// Old and new prices refer to the SAME ticket category.
const OFFERS = [
  {
    city: "Москва",
    photo: "/images/offer-chocolate-factory.webp", photoAlt: "Краснокирпичные корпуса и вывеска фабрики «Красный Октябрь»", photoPosition: "50% 45%",
    title: "Фабрика «Красный Октябрь»",
    description: "Экскурсия с шоколадным мастер-классом. Создайте свой десерт и заберите его с собой.",
    href: "https://gorbilet.ru/go/NQAdAH", oldPrice: 2500, price: 1500, discount: 40, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Петербург",
    photo: "/images/offer-petersburg-isaac.webp", photoAlt: "Исаакиевский собор с золотым куполом на фоне ясного синего неба", photoPosition: "50% 35%",
    title: "По главным местам Петербурга",
    description: "Автобусная экскурсия: знакомые силуэты, панорамы Невы и истории Северной столицы.",
    href: "https://gorbilet.ru/go/OWemZh", oldPrice: 1200, price: 590, discount: 50, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Нижний Новгород",
    photo: "/images/offer-pechersky-monastery.webp", photoAlt: "Белокаменные храмы Печерского монастыря с зелёными куполами", photoPosition: "50% 50%",
    title: "Нижний и Печерский монастырь",
    description: "Обзорная экскурсия по городу с посещением монастыря и прогулкой по Рождественской улице.",
    href: "https://gorbilet.ru/go/o0uKCk", oldPrice: 1900, price: 1615, discount: 15, priceLabel: "Взрослый билет",
  },
  {
    city: "Калининград",
    photo: "/images/offer-schaaken-cheese.webp", photoAlt: "Разные сорта сыра в витрине", photoPosition: "50% 50%",
    title: "Замок Шаакен и сыроварня",
    description: "Автобусная поездка к средневековому замку Шаакен и в сыроварню «Шаакендорф».",
    href: "https://gorbilet.ru/go/MIlPKt", oldPrice: 1500, price: 1200, discount: 20, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Казань",
    photo: "/images/offer-kazan-kremlin.webp", photoAlt: "Мечеть Кул-Шариф на территории Казанского кремля", photoPosition: "50% 45%",
    title: "Вся Казань за один день",
    description: "Главные места города, Казанский кремль и чаепитие с дегустацией татарских сладостей.",
    href: "https://gorbilet.ru/go/bcrhdG", oldPrice: 2375, price: 1900, discount: 20, priceLabel: "Взрослый билет",
  },
] as const;

const SOCIALS = [
  { name: "Telegram", handle: "@gorbilet_travel", href: "https://t.me/gorbilet_travel", icon: "/social/telegram.svg" },
  { name: "MAX", handle: "gorbilet_travel", href: "https://max.ru/gorbilet_travel", icon: "/social/max.svg" },
  { name: "ВКонтакте", handle: "gorbilet_travel", href: "https://vk.ru/gorbilet_travel", icon: "/social/vk.svg" },
];
const money = (value: number) => `${new Intl.NumberFormat("ru-RU").format(value)}\u00a0₽`;

function Arrow() {
  return <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
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
            <h1 id="hero-title"><span>Ваш проводник</span><span>по впечатлениям</span></h1>
          </div>
        </div>
        <HeroGallery photos={HERO_PHOTOS.map((photo) => ({ ...photo, src: asset(photo.src) }))} />
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
                <div className="offer-visual">
                  <img className="offer-photo" src={asset(offer.photo)} alt={offer.photoAlt} style={{ objectPosition: offer.photoPosition }} width="1200" height="800" loading="lazy" decoding="async" />
                </div>
                <div className="ticket-main">
                  <div className="ticket-kicker">
                    <span className="offer-city">{offer.city}</span>
                    <span className="discount-badge" role="img" aria-label={`Скидка ${offer.discount}%`}>
                      <strong aria-hidden="true">−{offer.discount}%</strong>
                    </span>
                  </div>
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
        <a className="back-top" href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
