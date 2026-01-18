"use client";

import { menuItems } from "@/content/menu";
import { useOrder } from "@/context/OrderContext";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { motion } from "framer-motion";
import Image from "next/image";

export function Menu() {
  const { addItem } = useOrder();
  const { toast } = useToast();

  const handleAdd = (item: (typeof menuItems)[0]) => {
    addItem(item);
    toast(`¡${item.name} agregado al pedido!`, "success");
  };

  return (
    <section id="menu" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold serif-text text-foreground">
          Explora nuestra Carta
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Una selección cuidada de nuestros favoritos, preparados al momento con
          ingredientes de temporada y la calidez del fuego.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex gap-6 group"
          >
            <div className="w-24 h-24 relative overflow-hidden rounded-xl shrink-0 border border-black/5 bg-muted shadow-sm">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-baseline gap-4">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <h5 className="text-lg font-bold serif-text group-hover:text-primary transition-colors">
                    {item.name}
                  </h5>
                  <div className="flex gap-1.5 min-h-[20px]">
                    {item.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant={tag === "Favorito" ? "accent" : "secondary"}
                        className="text-[9px] px-1.5 py-0 font-extrabold uppercase tracking-tight shadow-sm border-none bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grow border-b border-dotted border-muted-foreground/20 hidden sm:block mx-2" />
                <span className="font-extrabold text-[#171312] dark:text-foreground">
                  {formatCurrency(item.price)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground italic line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              <button
                onClick={() => handleAdd(item)}
                className="text-secondary text-xs font-bold flex items-center gap-1.5 mt-2 hover:text-primary transition-colors group/btn"
              >
                <PlusCircle className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
                Agregar al pedido
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <Button
          variant="outline"
          className="px-8 py-6 bg-[#f5f0eb] dark:bg-card text-foreground font-bold rounded-xl border border-black/5 hover:bg-black/5 dark:hover:bg-card/80 transition-all hover:scale-105"
          onClick={() => window.open("/menu-completo.pdf")}
        >
          Descargar Menú PDF
        </Button>
      </div>
    </section>
  );
}
