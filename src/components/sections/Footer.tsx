"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Instagram, Facebook, UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3 group">
          <div className="text-primary transition-transform group-hover:scale-110">
            <UtensilsCrossed className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-extrabold serif-text tracking-tight">
            {siteConfig.name}
          </h2>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
          <Link href="#menu" className="hover:text-primary transition-colors">
            Menú
          </Link>
          <Link
            href="#reservas"
            className="hover:text-primary transition-colors"
          >
            Reservas
          </Link>
        </nav>

        <div className="text-center md:text-right space-y-2">
          <p className="text-xs text-white/40 font-medium tracking-wide">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
            Hecho con pasión por el sabor
          </p>
        </div>
      </div>
    </footer>
  );
}
