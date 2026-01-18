import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

import { AppProviders } from "@/components/AppProviders";

export const metadata: Metadata = {
  title: "Brasa & Oliva | Sabor de brasa, calma de hogar",
  description:
    "Restaurante de cocina a la brasa en San José. Ingredientes locales, ambiente cálido y reservas rápidas online.",
  openGraph: {
    title: "Brasa & Oliva | Restaurante",
    description: "Sabor de brasa, calma de hogar.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
