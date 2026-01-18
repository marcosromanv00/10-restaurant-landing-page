import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
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
        className={`${manrope.variable} ${notoSerif.variable} font-sans antialiased bg-[#f8f6f2] dark:bg-[#2c2e30] text-[#171312]`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
