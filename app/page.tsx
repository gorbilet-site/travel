const publicBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cities = [
  { name: "Петербург", href: "https://gorbilet.ru/go/dRaj6P" },
  { name: "Москва", href: "https://gorbilet.ru/go/OH4NtB" },
  { name: "Нижний Новгород", href: "https://gorbilet.ru/go/vNHwYL" },
  { name: "Калининград", href: "https://gorbilet.ru/go/YghnGq" },
  { name: "Казань", href: "https://gorbilet.ru/go/SJ1JYU" },
  { name: "Сочи", href: "https://gorbilet.ru/go/kUsL1A" },
  { name: "Выборг", href: "https://gorbilet.ru/go/HPlRLU" },
];

const offers = [
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

const socialLinks = [
  {
    name: "Instagram",
    handle: "@gorbilet_travel",
    href: "https://www.instagram.com/gorbilet_travel?igsh=ZzYzeGY5bDNhZmFq",
    icon: "/social/instagram.svg",
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

function typograph(text: string) {
  let result = text.replace(/—\s+/g, "—\u00a0");

  for (let pass = 0; pass < 3; pass += 1) {
    result = result.replace(
      /(^|[\s(])([А-Яа-яЁёA-Za-z]{1,2})\s+(?=\S)/g,
      "$1$2\u00a0",
    );
  }

  return result;
}

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="site-nav">
        <a className="nav-brand" href="#top" aria-label="Горбилет — на главную">
          <img
            className="nav-logo"
            src={`${publicBase}/brand/logo-full-white.svg`}
            alt="Горбилет"
          />
        </a>
        <nav aria-label="Навигация по сайту">
          <a href="#cities">Города</a>
          <a href="#offers">Наш топ</a>
          <a href="#agents">Агенты</a>
          <a href="#socials">{typograph("Мы в сети")}</a>
        </nav>
        <a
          className="nav-cta"
          href="https://gorbilet.ru/go/sdu4nZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Все города <ExternalArrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-title-wrap">
          <h1 id="hero-title">
            Куда<br />махнём?
          </h1>
        </div>

        <div className="hero-editorial-grid">
          <figure className="hero-visual">
            <img
              src={`${publicBase}/images/deer.jpg`}
              alt="Любопытный олень заглядывает в камеру во время путешествия"
            />
          </figure>

          <div className="hero-story">
            <h2>{typograph("Идеи для тех, кому не сидится")}</h2>
            <p>
              {typograph(
                "Выбирайте город, ловите впечатления и сохраняйте планы на следующую поездку. Мы уже проверили маршруты — вам остаётся решить, куда ехать."
              )}
            </p>
            <a className="editorial-link" href="#offers">
              Смотреть наш топ <ExternalArrow />
            </a>
          </div>
        </div>

        <div className="city-ticker" aria-label="Основные города">
          {cities.map((city) => (
            <span key={city.name}>
              {typograph(city.name)}
            </span>
          ))}
        </div>
      </section>

      <section className="section cities" id="cities" aria-labelledby="cities-title">
        <div className="cities-heading">
          <h2 id="cities-title">7 городов</h2>
          <p>{typograph("От большой столицы до маленького города на один идеальный день")}</p>
        </div>

        <div className="city-index">
          {cities.map((city) => (
            <a
              className="city-row"
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              key={city.name}
              aria-label={`Открыть предложения в городе ${city.name}`}
            >
              <strong>{typograph(city.name)}</strong>
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </div>

        <a
          className="editorial-link city-all-link"
          href="https://gorbilet.ru/go/sdu4nZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Увидеть весь список <ExternalArrow />
        </a>
      </section>

      <section className="section offers" id="offers" aria-labelledby="offers-title">
        <div className="offers-heading">
          <h2 id="offers-title">Топ 5</h2>
          <p>{typograph("Пять маршрутов, ради которых стоит открыть календарь прямо сейчас")}</p>
        </div>

        <div className="offer-list">
          {offers.map((offer) => (
            <a
              className="offer-card"
              href={offer.href}
              target="_blank"
              rel="noopener noreferrer"
              key={offer.city}
              aria-label={`${offer.title}, ${offer.city}`}
            >
              <div className="offer-copy">
                <h3>{typograph(offer.title)}</h3>
              </div>
              <div className="offer-action">
                Открыть <ExternalArrow />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section agents" id="agents" aria-labelledby="agents-title">
        <div className="agents-heading">
          <h2 id="agents-title">{typograph("Да, это работа")}</h2>
          <p>
            {typograph(
              "Сначала едем сами. Потом честно рассказываем, куда точно стоит. Вы — в путешествии. Мы — рядом."
            )}
          </p>
        </div>

        <div className="agent-collage">
          <figure className="agent-shot agent-shot-a">
            <img
              src={`${publicBase}/images/agent-forest.jpg`}
              alt="Участница команды Горбилет Travel в оленьем парке"
            />
          </figure>
          <figure className="agent-shot agent-shot-b">
            <img
              src={`${publicBase}/images/agent-heic.jpg`}
              alt="Участница команды Горбилет Travel на смотровой площадке у моря"
            />
          </figure>
          <div className="collage-copy">
            <strong>{typograph("Маршрут сначала проживаем")}</strong>
            <p>{typograph("И только потом добавляем в подборку")}</p>
          </div>
          <figure className="agent-shot agent-shot-c">
            <img
              src={`${publicBase}/images/agent-boat-selfie.png`}
              alt="Участница команды Горбилет Travel на теплоходе"
            />
          </figure>
          <figure className="agent-shot agent-shot-d">
            <img
              src={`${publicBase}/images/agent-boat-pink.jpg`}
              alt="Путешествие команды Горбилет Travel на теплоходе"
            />
          </figure>
          <figure className="agent-shot agent-shot-e">
            <img
              src={`${publicBase}/images/marzipan.png`}
              alt="Марципан и местные сладости в путешествии"
            />
          </figure>
        </div>
      </section>

      <section className="section socials" id="socials" aria-labelledby="socials-title">
        <div className="social-heading">
          <h2 id="socials-title">Мы в сети</h2>
          <p>
            {typograph(
              "Больше маршрутов, скидок и поводов сорваться в поездку — в наших социальных сетях."
            )}
          </p>
        </div>
        <div className="social-list">
          {socialLinks.map((social) => (
            <a
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <span className="social-mark" aria-hidden="true">
                <img src={`${publicBase}${social.icon}`} alt="" />
              </span>
              <span className="social-copy">
                <strong>{typograph(social.name)}</strong>
                <small>{social.handle}</small>
              </span>
              <ExternalArrow />
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top" aria-label="Горбилет — наверх">
          <img
            src={`${publicBase}/brand/logo-full-white.svg`}
            alt="Горбилет"
          />
        </a>
        <span>© 2026 / Горбилет / путешествия</span>
      </footer>
    </main>
  );
}
