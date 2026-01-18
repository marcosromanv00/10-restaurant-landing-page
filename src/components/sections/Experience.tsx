"use client";

import Image from "next/image";
import { Check, Utensils, GlassWater, Leaf, Dog } from "lucide-react";

export function Experience() {
  const features = [
    {
      icon: Utensils,
      title: "Cocina abierta",
      desc: "Mira cómo la brasa transforma cada ingrediente.",
    },
    {
      icon: GlassWater,
      title: "Coctelería de autor",
      desc: "Tragos diseñados para maridar perfectamente.",
    },
    {
      icon: Leaf,
      title: "Vegetariano friendly",
      desc: "Opciones creativas para todos los gustos.",
    },
    {
      icon: Dog,
      title: "Terraza Pet Friendly",
      desc: "Tus peludos son siempre bienvenidos fuera.",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                    alt="Ambiente 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                    alt="Ambiente 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop"
                    alt="Ambiente 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Ambiente 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl hidden md:block">
              <p className="font-serif text-2xl font-bold italic">
                “Calma de hogar”
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Un ambiente diseñado para desconectar
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En Brasa & Oliva cada rincón cuenta una historia. Desde la calidez
              de la madera hasta el aroma de la leña, hemos creado un espacio
              donde el tiempo se detiene.
            </p>

            <div className="grid gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
