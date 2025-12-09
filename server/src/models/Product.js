/**
 * Модель `Product` (схема данных товара) для базы данных.
 *
 * Что будет разрабатываться в этом модуле:
 * - Определение схемы продукта (название, описание, цена, количество, изображения и т.д.).
 * - Валидация полей на уровне схемы и индексы (если необходимо).
 * - Методы/статические функции модели для удобных выборок и бизнес-логики.
 * - Экспорт БД-модели `Product` для использования в контроллерах.
 *
 * TODO: описать поля схемы и реализовать связанные утилиты/статические методов.
 */

// import Purple from "../assets/purple.svg";
// import Red from "../assets/red.svg";
// import Green from "../assets/green.svg";
// import Silver from "../assets/silver.svg";
// import Yellow from "../assets/yellow.svg";
// import Blue from "../assets/blue.svg";

const articles = [
  // ========== 1 ==========
  {
    id: "arton-test-full",
    title: "Обзор WeekMan Arton 100ml — реальный стресс-тест",
    date: "30.11.2025",
    badge: "POPULAR",
    image: "../assets/purple.svg",
    sections: [
      { id: "intro", title: "Зачем тест", image: "../assets/purple.svg" },
      { id: "tests", title: "Испытание", image: "../assets/blue.svg" },
      { id: "results", title: "Итоги тестов", image: "../assets/green.svg" },
      { id: "final", title: "Наш вердикт", image: "../assets/purple.svg" },
    ],
    content: `
Мы решили протестировать WeekMan Arton в условиях города.

Основные факторы:
- низкая температура
- влажность воздуха
- бетон
- сталь

С точки зрения плотности и покрытия — результат порадовал.
`,
  },

  // ========== 2 ==========
  {
    id: "sale-week-collection",
    title: "Большие скидки на краску — неделя распродаж",
    date: "29.11.2025",
    badge: "SALE",
    image: "../assets/red.svg",
    sections: [
      { id: "intro", title: "Какие скидки", image: "../assets/red.svg" },
      { id: "best", title: "Самые выгодные", image: "../assets/yellow.svg" },
      { id: "tips", title: "Кому подойдёт", image: "../assets/silver.svg" },
      { id: "final", title: "Как забрать", image: "../assets/red.svg" },
    ],
    content: `
На этой неделе можно сэкономить на популярных линейках.

Скидки до 30% на:
- Montana Gold
- Molotow
- Ironlak

Выбор красок огромный.
`,
  },

  // ========== 3 ==========
  {
    id: "season-colors",
    title: "Самые трендовые оттенки сезона",
    date: "26.11.2025",
    badge: "INFO",
    image: "../assets/green.svg",
    sections: [
      { id: "intro", title: "Наблюдения", image: "../assets/green.svg" },
      { id: "list", title: "ТОП 5 цветов", image: "../assets/blue.svg" },
      { id: "where", title: "Где применяются", image: "../assets/yellow.svg" },
      { id: "final", title: "Вывод", image: "../assets/green.svg" },
    ],
    content: `
В этом сезоне мастхэв оттенки:
- лайм
- неоновый розовый
- хром серебро

Используются в муралах, деталях, контуре.
`,
  },

  // ========== 4 ==========
  {
    id: "winter-performance",
    title: "Какая краска лучше зимой?",
    date: "24.11.2025",
    badge: "GUIDE",
    image: "../assets/silver.svg",
    sections: [
      { id: "intro", title: "Задача", image: "../assets/silver.svg" },
      { id: "list", title: "Краски сравнения", image: "../assets/blue.svg" },
      { id: "usage", title: "Как наносить", image: "../assets/green.svg" },
      { id: "final", title: "Вывод", image: "../assets/silver.svg" },
    ],
    content: `
Для холодов лучше всего:
- плотные составы
- быстрый высыхатель
- минимальный расход

Серебро работает на металлических поверхностях идеально.
`,
  },

  // ========== 5 ==========
  {
    id: "detail-markers",
    title: "Лучшие маркеры для контуров",
    date: "22.11.2025",
    badge: "REVIEW",
    image: "../assets/yellow.svg",
    sections: [
      { id: "intro", title: "Почему важно", image: "../assets/yellow.svg" },
      { id: "top", title: "ТОП маркеров", image: "../assets/blue.svg" },
      { id: "usage", title: "Советы", image: "../assets/green.svg" },
      { id: "final", title: "Стоит ли брать", image: "../assets/yellow.svg" },
    ],
    content: `
Маркеры дают чёткий контур и аккуратные переходы.

Лучшие бренды:
- Ironlak
- Molotow
- Montana

Важна плотность и насыщенность.
`,
  },

  // ========== 6 ==========
  {
    id: "budget-options",
    title: "Недорогие альтернативы дорогой краске",
    date: "20.11.2025",
    badge: "INFO",
    image: "../assets/blue.svg",
    sections: [
      { id: "intro", title: "Проблема цены", image: "../assets/blue.svg" },
      { id: "list", title: "Что взять", image: "../assets/green.svg" },
      { id: "compare", title: "Сравнение", image: "../assets/green.svg" },
      { id: "final", title: "Вывод", image: "../assets/blue.svg" },
    ],
    content: `
Есть альтернативы брендам с меньшей стоимостью.

Они:
- неплохо покрывают
- экономичны
- достаточно яркие

Для новичков — идеальный вариант.
`,
  },
];

export default articles;


