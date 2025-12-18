import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/public/fonts/fonts.css";
import { CartProvider } from "@/context/CartProvider";

export const metadata: Metadata = {
  title: "Spray Zone - Premium Spray Paint & Art Supplies",
  description: "Discover premium spray paints and art supplies from top brands. Shop Montana, Ironlak, Molotow and more.",
  keywords: "spray paint, art supplies, graffiti paint, Montana Gold, Ironlak",
  authors: [{ name: "Spray Zone" }],
  creator: "Spray Zone",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}