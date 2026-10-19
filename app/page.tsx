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
    city: "Москва", theme: "Попробовать новое",
    title: "Фабрика «Красный Октябрь»",
    description: "Экскурсия с шоколадным мастер-классом. Создайте свой десерт и заберите его с собой.",
    href: "https://gorbilet.ru/go/NQAdAH", oldPrice: 2500, price: 1500, discount: 40, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Петербург", theme: "Влюбиться в город",
    title: "По главным местам Петербурга",
    description: "Автобусная экскурсия: знакомые силуэты, панорамы Невы и истории Северной столицы.",
    href: "https://gorbilet.ru/go/OWemZh", oldPrice: 1200, price: 590, discount: 50, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Нижний Новгород", theme: "Свернуть с привычного пути",
    title: "Нижний и Печерский монастырь",
    description: "Обзорная экскурсия по городу с посещением монастыря и прогулкой по Рождественской улице.",
    href: "https://gorbilet.ru/go/o0uKCk", oldPrice: 1900, price: 1615, discount: 15, priceLabel: "Взрослый билет",
  },
  {
    city: "Калининград", theme: "Уехать за впечатлениями",
    title: "Замок Шаакен и сыроварня",
    description: "Автобусная поездка к средневековому замку Шаакен и в сыроварню «Шаакендорф».",
    href: "https://gorbilet.ru/go/MIlPKt", oldPrice: 1500, price: 1200, discount: 20, priceLabel: "Билет на экскурсию",
  },
  {
    city: "Казань", theme: "Узнать город на вкус",
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
const STAMP_R = 46;
const STAMP_C = 2 * Math.PI * STAMP_R;
const TILTS = [-12, 8, -6, 10, -9];

function Stamp({ theme, discount, index }: { theme: string; discount: number; index: number }) {
  const label = `${theme.toUpperCase()} • ГОРБИЛЕТ • `;
  const fontSize = Math.min(11, STAMP_C / (label.length * 0.78));
  const ring = `M60,${60 - STAMP_R} a${STAMP_R},${STAMP_R} 0 1,1 0,${STAMP_R * 2} a${STAMP_R},${STAMP_R} 0 1,1 0,-${STAMP_R * 2}`;
  const id = `stamp-ring-${index}`;
  return (
    <svg className="stamp" viewBox="0 0 120 120" aria-hidden="true" style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` } as React.CSSProperties}>
      <g filter="url(#ink)">
        <circle className="stamp-disk" cx="60" cy="60" r="58" />
        <circle className="stamp-line" cx="60" cy="60" r="58" strokeWidth="1.6" />
        <circle className="stamp-line" cx="60" cy="60" r="54.5" strokeWidth=".8" />
        <circle className="stamp-line" cx="60" cy="60" r="36" strokeWidth="1" strokeDasharray="2.2 3.2" />
        <path id={id} d={ring} fill="none" />
        <text className="stamp-ring" style={{ fontSize: `${fontSize.toFixed(2)}px` }}>
          <textPath href={`#${id}`} textLength={STAMP_C.toFixed(1)} lengthAdjust="spacing">{label}</textPath>
        </text>
        <text className="stamp-value" x="60" y="63" textAnchor="middle">−{discount}%</text>
        <text className="stamp-caption" x="60" y="78" textAnchor="middle">скидка</text>
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="site-shell" id="top">
      <svg className="svg-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
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
          {OFFERS.map((offer, index) => (
            <li key={offer.href}>
              <a className="offer-ticket" href={offer.href} target="_blank" rel="noopener noreferrer">
                <div className="ticket-main">
                  <Stamp theme={offer.theme} discount={offer.discount} index={index} />
                  <span className="offer-city">{offer.city}</span>
                  <span className="sr-only">{offer.theme}. Скидка {offer.discount}%.</span>
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
