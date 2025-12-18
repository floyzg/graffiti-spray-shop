import { StaticImageData } from "next/image";
import Purple from "@/assets/purple.png";
import Red from "@/assets/red.png";
import Green from "@/assets/green.png";
import Silver from "@/assets/silver.png";
import Yellow from "@/assets/yellow.png";
import Blue from "@/assets/blue.png";

export interface ArticleSection {
  id: string;
  title: string;
  image: StaticImageData;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  badge: string;
  image: StaticImageData;
  sections: ArticleSection[];
  content: string;
}

const articles: Article[] = [
  // ========== 1 ==========
  {
    id: "arton-test-full",
    title: "Обзор WeekMan Arton 100ml — реальный стресс-тест",
    date: "30.11.2025",
    badge: "POPULAR",
    image: Purple,
    sections: [
      { id: "intro", title: "Зачем тест", image: Purple },
      { id: "tests", title: "Испытание", image: Blue },
      { id: "results", title: "Итоги тестов", image: Green },
      { id: "final", title: "Наш вердикт", image: Purple },
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
    image: Red,
    sections: [
      { id: "intro", title: "Какие скидки", image: Red },
      { id: "best", title: "Самые выгодные", image: Yellow },
      { id: "tips", title: "Кому подойдёт", image: Silver },
      { id: "final", title: "Как забрать", image: Red },
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
    image: Green,
    sections: [
      { id: "intro", title: "Наблюдения", image: Green },
      { id: "list", title: "ТОП 5 цветов", image: Blue },
      { id: "where", title: "Где применяются", image: Yellow },
      { id: "final", title: "Вывод", image: Green },
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
    image: Silver,
    sections: [
      { id: "intro", title: "Задача", image: Silver },
      { id: "list", title: "Краски сравнения", image: Blue },
      { id: "usage", title: "Как наносить", image: Purple },
      { id: "final", title: "Вывод", image: Silver },
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
    image: Yellow,
    sections: [
      { id: "intro", title: "Почему важно", image: Yellow },
      { id: "top", title: "ТОП маркеров", image: Blue },
      { id: "usage", title: "Советы", image: Green },
      { id: "final", title: "Стоит ли брать", image: Yellow },
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
    image: Blue,
    sections: [
      { id: "intro", title: "Проблема цены", image: Blue },
      { id: "list", title: "Что взять", image: Green },
      { id: "compare", title: "Сравнение", image: Purple },
      { id: "final", title: "Вывод", image: Blue },
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
