"use client";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, ArrowUpRight, Clock, Mail, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  date: string;
  content: string;
  scores: {
    comida: number;
    servicio: number;
    ambiente: number;
  };
}

export function LocationHours() {
  return (
    <section id="ubicacion" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold serif-text">¿Dónde estamos?</h3>
          <div className="aspect-video bg-sand rounded-2xl relative overflow-hidden group shadow-lg border border-black/5">
            <Image
              src="/images/map.png"
              alt="Ubicación de Brasa & Oliva"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-card/90 p-4 rounded-lg shadow-lg flex items-center justify-between border border-black/5 backdrop-blur-md">
              <div>
                <p className="text-[10px] font-bold uppercase text-primary mb-1 tracking-widest">
                  Dirección
                </p>
                <p className="text-sm font-bold serif-text">
                  {siteConfig.address}
                </p>
              </div>
              <MapPin className="h-6 w-6 text-primary" />
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl border-none"
                size="sm"
                asChild
              >
                <a
                  href={siteConfig.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Abrir Mapa <ArrowUpRight className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Horarios
              </h6>
              <ul className="space-y-3 text-sm">
                {siteConfig.openingHours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-black/5 pb-1 font-medium"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-bold">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Contacto
              </h6>
              <ul className="space-y-4 text-sm font-bold serif-text">
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="w-full bg-secondary text-white rounded-xl py-6 font-bold uppercase tracking-widest text-sm border-none shadow-lg shadow-secondary/20"
                  asChild
                >
                  <a href={`tel:${siteConfig.phone}`}>Llamar ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8" id="resenas">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold serif-text">Lo que dicen</h3>
            <div className="flex items-center gap-1.5 text-primary">
              <span className="text-2xl font-black">4.8</span>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <TestimonialCard
              name="Carlos Ruiz"
              date="Hace 2 días"
              content="La mejor experiencia de brasa en la ciudad. El servicio fue impecable y la atmósfera es realmente acogedora."
              scores={{ comida: 5, servicio: 5, ambiente: 5 }}
            />
            <TestimonialCard
              name="Elena Martínez"
              date="Hace 1 semana"
              content="Increíble selección de vinos. La pasta de la casa es obligatoria. Volveré sin duda para probar los postres."
              scores={{ comida: 5, servicio: 4, ambiente: 5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, date, content, scores }: TestimonialProps) {
  return (
    <div className="p-8 bg-white dark:bg-card rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary serif-text text-xl border border-primary/5">
          {name.charAt(0)}
        </div>
        <div>
          <h6 className="font-bold text-sm">{name}</h6>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
            {date}
          </p>
        </div>
      </div>
      <p className="text-sm italic text-foreground/80 leading-relaxed mb-6 serif-text font-medium border-l-2 border-primary/20 pl-4 py-1">
        &ldquo;{content}&rdquo;
      </p>
      <div className="flex gap-6 text-[9px] font-black uppercase text-secondary tracking-widest">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Comida:{" "}
          {scores.comida}/5
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Servicio:{" "}
          {scores.servicio}/5
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Ambiente:{" "}
          {scores.ambiente}/5
        </span>
      </div>
    </div>
  );
}
