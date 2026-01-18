"use client";

import Image from "next/image";
import { Utensils, GlassWater, Leaf, Dog } from "lucide-react";

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
    <section className="py-24 overflow-hidden max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-card/20">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                  alt="Ambiente 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-card/20">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                  alt="Ambiente 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-card/20">
                <Image
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop"
                  alt="Ambiente 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[2deg] hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-card/20">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Ambiente 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-6 bg-primary text-white p-8 rounded-2xl hidden lg:block shadow-2xl shadow-primary/30 animate-pulse border-none">
            <p className="font-serif text-3xl font-bold italic serif-text tracking-tight">
              &ldquo;Calma de hogar&rdquo;
            </p>
          </div>
        </div>

        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="serif-text text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Un ambiente para{" "}
              <span className="text-secondary italic">desconectar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              En Brasa & Oliva cada rincón cuenta una historia. Desde la calidez
              de la madera hasta el aroma de la leña, hemos creado un espacio
              donde el tiempo se detiene y los sabores fluyen.
            </p>
          </div>

          <div className="grid gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="h-14 w-14 rounded-2xl bg-[#f5f0eb] dark:bg-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-black/5 ring-1 ring-black/5">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-xl serif-text">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
