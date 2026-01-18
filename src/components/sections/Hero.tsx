"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { Star, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-muted/30 rounded-l-[100px] hidden lg:block" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
            <Star className="h-4 w-4 fill-current" />
            Gastronomía de altura
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            Sabor de brasa, <br />
            <span className="text-primary italic">calma de hogar.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Descubre el corazón de nuestra cocina: ingredientes locales
            seleccionados, ambiente cálido y la maestría de la brasa
            tradicional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="px-10"
              onClick={() => (window.location.hash = "#reservas")}
            >
              Reservar mesa
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10"
              onClick={() => (window.location.hash = "#menu")}
            >
              Ver menú
            </Button>
          </div>

          {/* Trust Row */}
          <div className="pt-8 flex flex-wrap gap-8 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="font-bold text-lg">{siteConfig.stats.rating}★</p>
                <p className="text-xs text-muted-foreground">Reseñas Google</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-lg">{siteConfig.stats.status}</p>
                <p className="text-xs text-muted-foreground">Hasta las 10 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-lg">{siteConfig.stats.distance}</p>
                <p className="text-xs text-muted-foreground">San José, CR</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Interior del restaurante Brasa & Oliva"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
