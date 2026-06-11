import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d8f695ed-8986-4763-841a-82fe4b820b5d/files/381623c5-1edb-4f6b-acd4-553ceae99330.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Прайс", href: "#price" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Zap", title: "Замена АКБ", desc: "Восстановление и замена аккумуляторных батарей любой ёмкости", price: "от 2 500 ₽", time: "1–2 часа" },
  { icon: "Settings", title: "Ремонт мотора", desc: "Диагностика и ремонт электромоторов, замена обмотки", price: "от 3 000 ₽", time: "2–4 часа" },
  { icon: "Cpu", title: "Плата контроллера", desc: "Прошивка, ремонт и замена платы управления", price: "от 1 500 ₽", time: "1–3 часа" },
  { icon: "Wrench", title: "Механика", desc: "Тормоза, подшипники, деки, рули и вся механическая часть", price: "от 500 ₽", time: "30 мин" },
  { icon: "Gauge", title: "Диагностика", desc: "Полная компьютерная диагностика всех систем самоката", price: "бесплатно", time: "30 мин" },
  { icon: "Shield", title: "Гарантийный ремонт", desc: "Ремонт по гарантии и постгарантийное обслуживание", price: "по договору", time: "—" },
];

const PRICE_ITEMS = [
  { service: "Диагностика полная", price: "Бесплатно", category: "Диагностика" },
  { service: "Замена аккумулятора 36V", price: "2 500 — 4 000 ₽", category: "Аккумулятор" },
  { service: "Замена аккумулятора 48V", price: "4 000 — 8 000 ₽", category: "Аккумулятор" },
  { service: "Балансировка ячеек АКБ", price: "от 1 500 ₽", category: "Аккумулятор" },
  { service: "Ремонт мотор-колеса", price: "3 000 — 6 000 ₽", category: "Мотор" },
  { service: "Замена подшипников мотора", price: "от 1 200 ₽", category: "Мотор" },
  { service: "Ремонт контроллера", price: "1 500 — 4 000 ₽", category: "Электроника" },
  { service: "Прошивка контроллера", price: "от 800 ₽", category: "Электроника" },
  { service: "Замена дисплея", price: "от 1 800 ₽", category: "Электроника" },
  { service: "Замена тормозных колодок", price: "от 500 ₽", category: "Механика" },
  { service: "Замена камеры/покрышки", price: "от 600 ₽", category: "Механика" },
  { service: "Регулировка тормозов", price: "от 300 ₽", category: "Механика" },
];

const REVIEWS = [
  { name: "Алексей М.", rating: 5, text: "Сдал самокат с мёртвой батареей, через 2 часа был готов. Мастер объяснил что и как, показал результаты диагностики. Очень профессионально!", date: "12 мая 2025", model: "Kugoo S3" },
  { name: "Виктория Т.", rating: 5, text: "Починили контроллер на Xiaomi за день. Цена адекватная, качество отличное. Езжу уже 3 месяца — никаких проблем. Рекомендую!", date: "3 апреля 2025", model: "Xiaomi M365" },
  { name: "Дмитрий К.", rating: 5, text: "Обратился с несколькими проблемами сразу: тормоза, подшипник и замена покрышки. Всё сделали быстро и качественно. Приятные ребята.", date: "28 марта 2025", model: "Ninebot G30" },
  { name: "Анна С.", rating: 5, text: "Бесплатная диагностика — это реально бесплатно! Нашли проблему, объяснили варианты решения. Отремонтировали в тот же день.", date: "15 февраля 2025", model: "Inokim Light 2" },
];

const CATEGORIES = ["Все", "Диагностика", "Аккумулятор", "Мотор", "Электроника", "Механика"];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", model: "", problem: "" });

  const filteredPrices = activeCategory === "Все"
    ? PRICE_ITEMS
    : PRICE_ITEMS.filter(p => p.category === activeCategory);

  const handleScroll = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#060c0f] text-[#e0ffff]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,255,255,0.1)] bg-[rgba(6,12,15,0.95)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#00ffff] flex items-center justify-center animate-pulse-neon">
              <Icon name="Zap" size={16} className="text-[#00ffff]" />
            </div>
            <span className="font-oswald font-bold text-xl tracking-widest text-white">
              VOLT<span className="neon-text">FIX</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => handleScroll(l.href)}
                className="mono text-xs tracking-widest text-[rgba(0,255,255,0.6)] hover:text-[#00ffff] uppercase transition-colors duration-200">
                {l.label}
              </button>
            ))}
            <button className="neon-btn-solid text-sm" onClick={() => handleScroll("#booking")}>
              Записаться
            </button>
          </div>

          <button className="md:hidden text-[#00ffff]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(0,255,255,0.1)] bg-[#060c0f] px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => handleScroll(l.href)}
                className="text-left mono text-xs tracking-widest text-[rgba(0,255,255,0.6)] hover:text-[#00ffff] uppercase">
                {l.label}
              </button>
            ))}
            <button className="neon-btn-solid text-sm" onClick={() => handleScroll("#booking")}>
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden cyber-grid-animated scanline-overlay">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="VOLTFIX" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c0f] via-[rgba(6,12,15,0.8)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c0f] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-4 w-16 h-16 border-t-2 border-l-2 border-[#00ffff] opacity-40" />
        <div className="absolute bottom-10 right-4 w-16 h-16 border-b-2 border-r-2 border-[#00ffff] opacity-40" />
        <div className="absolute top-1/2 right-8 hidden lg:flex flex-col gap-2 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#00ffff] rounded-full" style={{ opacity: 1 - i * 0.1 }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-float-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="h-px w-12 bg-[#00ffff]" />
              <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Сервисный центр</span>
              <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" />
            </div>

            <h1 className="section-title text-white mb-2 animate-float-up opacity-0 delay-100" style={{ animationFillMode: "forwards" }}>
              Ремонт
            </h1>
            <h1 className="section-title neon-text mb-2 animate-float-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
              Электро
            </h1>
            <h1 className="section-title text-white mb-8 animate-float-up opacity-0 delay-300" style={{ animationFillMode: "forwards" }}>
              самокатов
            </h1>

            <p className="text-[rgba(224,255,255,0.6)] text-lg mb-10 max-w-xl leading-relaxed animate-float-up opacity-0 delay-400" style={{ animationFillMode: "forwards" }}>
              Профессиональная диагностика и ремонт любых электросамокатов.
              Гарантия на все работы. Запчасти в наличии.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-float-up opacity-0 delay-500" style={{ animationFillMode: "forwards" }}>
              <button className="neon-btn-solid text-sm" onClick={() => handleScroll("#booking")}>
                Записаться на ремонт
              </button>
              <button className="neon-btn text-sm" onClick={() => handleScroll("#price")}>
                Смотреть прайс
              </button>
            </div>

            <div className="flex flex-wrap gap-8 animate-float-up opacity-0 delay-600" style={{ animationFillMode: "forwards" }}>
              {[
                { value: "5 лет", label: "На рынке" },
                { value: "3 200+", label: "Ремонтов" },
                { value: "100%", label: "Гарантия" },
                { value: "1–4 ч", label: "Срок ремонта" },
              ].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-oswald text-2xl font-bold neon-text">{s.value}</span>
                  <span className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 bg-[#060c0f] cyber-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#00ffff]" />
            <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Что мы делаем</span>
          </div>
          <h2 className="section-title text-white mb-12">
            Наши <span className="neon-text">услуги</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-cyber p-6 group cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 border border-[rgba(0,255,255,0.3)] flex items-center justify-center group-hover:border-[#00ffff] transition-colors">
                    <Icon name={s.icon} size={22} className="text-[#00ffff]" />
                  </div>
                  <span className="mono text-xs text-[rgba(0,255,255,0.4)]">{s.time}</span>
                </div>
                <h3 className="font-oswald font-semibold text-lg text-white uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-[rgba(224,255,255,0.5)] text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-[rgba(0,255,255,0.1)]" />
                  <span className="mono text-sm text-[#00ffff] font-medium">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 bg-[#040a0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#00ffff]" />
            <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Стоимость работ</span>
          </div>
          <h2 className="section-title text-white mb-10">
            Прайс<span className="neon-text">-лист</span>
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(c => (
              <button key={c}
                onClick={() => setActiveCategory(c)}
                className={`mono text-xs px-4 py-2 uppercase tracking-widest border transition-all duration-200 ${
                  activeCategory === c
                    ? "border-[#00ffff] bg-[rgba(0,255,255,0.1)] text-[#00ffff]"
                    : "border-[rgba(0,255,255,0.2)] text-[rgba(0,255,255,0.4)] hover:border-[rgba(0,255,255,0.5)] hover:text-[rgba(0,255,255,0.7)]"
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="border border-[rgba(0,255,255,0.15)] overflow-hidden">
            <div className="grid grid-cols-3 bg-[rgba(0,255,255,0.05)] px-6 py-3 border-b border-[rgba(0,255,255,0.1)]">
              <span className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest">Услуга</span>
              <span className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest">Категория</span>
              <span className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest text-right">Цена</span>
            </div>
            {filteredPrices.map((item, i) => (
              <div key={item.service}
                className={`grid grid-cols-3 px-6 py-4 border-b border-[rgba(0,255,255,0.05)] hover:bg-[rgba(0,255,255,0.03)] transition-colors ${
                  i % 2 === 0 ? "" : "bg-[rgba(0,255,255,0.02)]"
                }`}>
                <span className="text-[rgba(224,255,255,0.8)] text-sm">{item.service}</span>
                <span className="mono text-xs text-[rgba(0,255,255,0.4)] self-center">{item.category}</span>
                <span className="mono text-sm text-[#00ffff] font-medium text-right">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="mono text-xs text-[rgba(0,255,255,0.3)] mt-4">
            * Точная стоимость определяется после диагностики. Диагностика — бесплатно.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#060c0f] cyber-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-[#00ffff]" />
                <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">О компании</span>
              </div>
              <h2 className="section-title text-white mb-8">
                Кто <span className="neon-text">мы</span>
              </h2>
              <p className="text-[rgba(224,255,255,0.65)] leading-relaxed mb-6">
                VOLTFIX — специализированный сервис по ремонту электросамокатов с 2020 года.
                Мы работаем со всеми брендами: Xiaomi, Ninebot, Kugoo, Inokim, Kaabo и другими.
              </p>
              <p className="text-[rgba(224,255,255,0.65)] leading-relaxed mb-10">
                Наши мастера имеют профильное образование и регулярно проходят обучение.
                Мы используем только оригинальные или сертифицированные запчасти.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Гарантия 6 месяцев на все работы" },
                  { icon: "Clock", text: "Срочный ремонт за 2 часа" },
                  { icon: "Package", text: "Запчасти всегда в наличии" },
                  { icon: "Star", text: "Рейтинг 4.9 из 5 на Яндексе" },
                ].map(f => (
                  <div key={f.icon} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 flex-shrink-0">
                      <Icon name={f.icon} size={16} className="text-[#00ffff]" />
                    </div>
                    <span className="text-[rgba(224,255,255,0.65)] text-sm leading-snug">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-[rgba(0,255,255,0.1)]" />
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00ffff] z-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ffff] z-10" />
              <img src={HERO_IMG} alt="Мастерская" className="w-full h-80 object-cover opacity-60 relative" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(6,12,15,0.9)] border border-[rgba(0,255,255,0.2)] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                  <span className="mono text-xs text-[#00ff88] uppercase tracking-widest">Сейчас работаем</span>
                  <span className="mono text-xs text-[rgba(0,255,255,0.4)] ml-auto">Пн-Вс 9:00–21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-[#040a0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#00ffff]" />
            <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Мнения клиентов</span>
          </div>
          <h2 className="section-title text-white mb-12">
            От<span className="neon-text">зывы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="card-cyber p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-oswald font-semibold text-white uppercase tracking-wide">{r.name}</div>
                    <div className="mono text-xs text-[rgba(0,255,255,0.4)] mt-1">{r.model}</div>
                  </div>
                  <span className="mono text-xs text-[rgba(0,255,255,0.3)]">{r.date}</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#00ffff] fill-current" />
                  ))}
                </div>
                <p className="text-[rgba(224,255,255,0.6)] text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-[#060c0f] cyber-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-[#00ffff]" />
                <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Запись онлайн</span>
              </div>
              <h2 className="section-title text-white mb-6">
                Запись на <span className="neon-text">ремонт</span>
              </h2>
              <p className="text-[rgba(224,255,255,0.55)] leading-relaxed mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут, чтобы уточнить детали и назначить удобное время.
              </p>

              <div className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (953) 333-40-04" },
                  { icon: "MessageCircle", text: "Написать в WhatsApp" },
                  { icon: "MapPin", text: "ул. Электрическая, 42, Москва" },
                  { icon: "Clock", text: "Ежедневно с 9:00 до 21:00" },
                ].map(c => (
                  <div key={c.icon} className="flex items-center gap-4">
                    <Icon name={c.icon} size={16} className="text-[#00ffff]" />
                    <span className="text-[rgba(224,255,255,0.65)] text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-cyber p-8">
              <div className="space-y-4">
                <div>
                  <label className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest block mb-2">Ваше имя</label>
                  <input className="cyber-input" placeholder="Иван Иванов"
                    value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest block mb-2">Телефон</label>
                  <input className="cyber-input" placeholder="+7 (___) ___-__-__"
                    value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                </div>
                <div>
                  <label className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest block mb-2">Модель самоката</label>
                  <input className="cyber-input" placeholder="Xiaomi M365"
                    value={formData.model} onChange={e => setFormData(p => ({ ...p, model: e.target.value }))} />
                </div>
                <div>
                  <label className="mono text-xs text-[rgba(0,255,255,0.5)] uppercase tracking-widest block mb-2">Описание проблемы</label>
                  <textarea className="cyber-input resize-none h-24" placeholder="Не заряжается / не едет / стучит..."
                    value={formData.problem} onChange={e => setFormData(p => ({ ...p, problem: e.target.value }))} />
                </div>
                <button className="neon-btn-solid w-full text-sm py-3 mt-2">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS + MAP */}
      <section id="contacts" className="py-24 bg-[#040a0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#00ffff]" />
            <span className="mono text-xs text-[#00ffff] tracking-widest uppercase">Как нас найти</span>
          </div>
          <h2 className="section-title text-white mb-10">
            Конт<span className="neon-text">акты</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {[
              { icon: "MapPin", title: "Адрес", value: "ул. Электрическая, 42", sub: "Москва, ТЦ «Техноград», 2 этаж" },
              { icon: "Phone", title: "Телефон", value: "+7 (953) 333-40-04", sub: "Ежедневно 9:00–21:00" },
              { icon: "Mail", title: "Email", value: "info@voltfix.ru", sub: "Ответим в течение часа" },
            ].map(c => (
              <div key={c.icon} className="card-cyber p-6 flex items-start gap-4">
                <div className="w-10 h-10 border border-[rgba(0,255,255,0.3)] flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={18} className="text-[#00ffff]" />
                </div>
                <div>
                  <div className="mono text-xs text-[rgba(0,255,255,0.4)] uppercase tracking-widest mb-1">{c.title}</div>
                  <div className="font-oswald text-white font-medium text-lg">{c.value}</div>
                  <div className="text-[rgba(224,255,255,0.45)] text-xs mt-1">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative neon-border overflow-hidden" style={{ height: 400 }}>
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ffff] z-10" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ffff] z-10" />
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=12&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              className="opacity-80"
              title="Карта проезда"
              style={{ filter: "hue-rotate(170deg) invert(1) brightness(0.6) saturate(1.5)" }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(0,255,255,0.1)] py-10 bg-[#060c0f]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-[#00ffff] flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-[#00ffff]" />
            </div>
            <span className="font-oswald font-bold text-lg tracking-widest text-white">
              VOLT<span className="neon-text">FIX</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => handleScroll(l.href)}
                className="mono text-xs text-[rgba(0,255,255,0.4)] hover:text-[#00ffff] uppercase tracking-widest transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          <span className="mono text-xs text-[rgba(0,255,255,0.25)]">
            © 2025 VOLTFIX. Все права защищены.
          </span>
        </div>
      </footer>
    </div>
  );
}