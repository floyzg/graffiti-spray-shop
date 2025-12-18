# Spray Zone - Next.js App

This is a fully migrated **[Next.js](https://nextjs.org) 16** project with **TypeScript**, **App Router**, and **Tailwind CSS**.

🎨 **Spray Zone** - Premium spray paint e-commerce platform for street artists.

## 📋 Project Status

✅ **Fully migrated to Next.js 16 with TypeScript**
- App Router (v13+)
- Client & Server Components ready
- TypeScript strict mode
- Context API for state management
- Tailwind CSS 4
- Three.js 3D models support

See [MIGRATION.md](./MIGRATION.md) for detailed migration notes.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files. TypeScript errors are shown in console.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
client/
├── app/
│   ├── layout.tsx              # Root layout with CartProvider
│   ├── page.tsx               # Home page
│   ├── (pages)/               # Route group
│   │   ├── page.tsx          # Home (duplicate)
│   │   └── cart/
│   │       └── page.tsx      # Shopping cart
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── ProductCard/
│   │   ├── DropdownModal/
│   │   ├── FloatingInput/
│   │   └── ArticleCard/
│   ├── Home/                  # Home page component
│   ├── Cart/                  # Cart page component
│   └── globals.css           # Global styles
├── context/
│   ├── CartProvider.tsx      # Context with types
│   └── useCart.ts           # Custom hook
├── assets/                   # SVGs and images
├── public/
│   └── models/              # 3D models
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🔧 Key Features

### TypeScript Support
- Strict mode enabled
- Full type coverage for components
- Type-safe context API

### Components

**Header Component** (`app/components/Header/Header.tsx`)
- Mobile-friendly burger menu
- Cart counter
- User navigation
- Smooth scroll to sections

**ProductCard Component** (`app/components/ProductCard/ProductCard.tsx`)
- Add to cart functionality
- Quantity counter
- Price display
- Product info

**Hero Section** (`app/components/Hero/Hero.tsx`)
- 3D spray can model (Three.js + React Three Fiber)
- Responsive design
- Decorative elements

**Shopping Cart** (`app/Cart/Cart.tsx`)
- Add/remove items
- Quantity management
- Total calculation
- LocalStorage persistence

### State Management

Using React Context API for cart state:

```typescript
import { useCart } from "@/context/useCart";

export default function MyComponent() {
  const { cart, addToCart, updateCount, removeItem } = useCart();
  // ...
}
```

### Styling

- **Tailwind CSS 4** for utility-first styling
- **PostCSS** for processing
- **Custom fonts** from Google Fonts
- Dark theme with neon accents

## 📦 Dependencies

### Core
- `next@16.0.10` - React framework
- `react@19.2.1` - UI library
- `react-dom@19.2.1` - DOM rendering

### Styling
- `tailwindcss@4` - Utility CSS
- `@tailwindcss/postcss` - PostCSS plugin

### 3D Graphics
- `@react-three/fiber@9.4.2` - React renderer for Three.js
- `@react-three/drei@10.7.7` - Useful helpers
- `three@0.181.2` - 3D library

### Development
- `typescript@5` - Type checking
- `eslint@9` - Code linting
- `eslint-config-next@16.0.10` - Next.js ESLint config

## 🎯 API Integration

The app expects a backend API at `http://localhost:4000` with:

```
GET /api/products
GET /assets/:imageName
```

Set `NEXT_PUBLIC_API_URL` in `.env.local` to change the API URL.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Support](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📄 License

This project is open source.
