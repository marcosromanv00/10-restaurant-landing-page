"use client";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  return (
    <section id="ubicacion" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Map Placeholder */}
          <div className="lg:col-span-3 min-h-[400px] bg-muted relative rounded-3xl overflow-hidden group border shadow-inner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-card/90 backdrop-blur p-8 rounded-2xl shadow-xl max-w-sm text-center space-y-4">
                <MapPin className="h-10 w-10 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Encuéntranos</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.address}
                </p>
                <Button variant="primary" className="w-full">
                  <a
                    href={siteConfig.links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    Abrir en Google Maps
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold">Horarios</h2>
              <div className="divide-y border-y">
                {siteConfig.openingHours.map((h) => (
                  <div
                    key={h.day}
                    className="py-3 flex justify-between gap-4 text-sm"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 space-y-4">
              <h3 className="font-bold flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Atención Directa
              </h3>
              <p className="text-sm text-muted-foreground">
                ¿Deseas pedir comida para recoger o tienes dudas sobre un evento
                privado?
              </p>
              <Button
                variant="outline"
                className="w-full justify-start space-x-3"
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center w-full"
                >
                  <span className="flex-1 text-left">Llamar ahora</span>
                  <span className="font-mono text-primary">
                    {siteConfig.phone}
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
