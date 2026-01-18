"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { Star, Clock, Compass } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-black/5 px-4 py-2 rounded-full shadow-sm dark:bg-card/20 backdrop-blur-sm">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-foreground/70">
              {siteConfig.stats.rating} • San José, Costa Rica
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1] serif-text text-foreground">
            Sabor de brasa,
            <br />
            <span className="text-primary italic">calma de hogar.</span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
            Ingredientes locales seleccionados a mano y la calidez de nuestra
            cocina contemporánea. Descubre una experiencia gastronómica honesta.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              className="bg-primary text-white px-8 py-6 rounded-xl text-base font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all border-none"
              onClick={() => (window.location.hash = "#reservas")}
            >
              Reservar ahora
            </Button>
            <Button
              className="bg-secondary text-white px-8 py-6 rounded-xl text-base font-bold shadow-xl shadow-secondary/30 hover:-translate-y-1 transition-all border-none"
              onClick={() => (window.location.hash = "#menu")}
            >
              Ver menú
            </Button>
          </div>

          {/* Trust Row - Simplified but aligned */}
          <div className="pt-8 flex flex-wrap gap-8 border-t border-black/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">
                  {siteConfig.stats.distance}
                </p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Ubicación Central
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">
                  {siteConfig.stats.status}
                </p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Abierto hoy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="aspect-[4/5] relative rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border-8 border-white dark:border-card/20">
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
              alt="Interior del restaurante Brasa & Oliva"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl max-w-[200px] border border-black/5 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2 italic">
              Recomendación
            </p>
            <p className="text-sm font-medium italic serif-text">
              &quot;El pulpo a la brasa es simplemente espectacular.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
