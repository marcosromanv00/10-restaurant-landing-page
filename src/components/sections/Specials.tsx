"use client";

import * as React from "react";
import Image from "next/image";
import { specialties, MenuItem } from "@/content/menu";
import { Card, CardDescription } from "@/components/ui/Card";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Specials() {
  const [filter, setFilter] = React.useState<MenuItem["category"] | "Todo">(
    "Todo",
  );

  const categories: ("Todo" | MenuItem["category"])[] = [
    "Todo",
    "Brasa",
    "Vegetariano",
    "Mariscos",
    "Postres",
  ];

  const filteredSpecials =
    filter === "Todo"
      ? specialties
      : specialties.filter((item) => item.category === filter);

  return (
    <section
      id="especialidades"
      className="py-24 bg-[#f5f0eb]/30 dark:bg-card/5"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div className="space-y-4 flex-1">
            <h3 className="text-4xl font-bold serif-text">
              Especialidades de la Casa
            </h3>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Una selección cuidada de nuestros platos más emblemáticos, donde
              la tradición se encuentra con la innovación.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "flex h-10 items-center justify-center px-6 rounded-full transition-all text-sm font-bold",
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white dark:bg-card border border-black/5 hover:bg-white/80 dark:hover:bg-card/80",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSpecials.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-none">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant={tag === "Favorito" ? "accent" : "secondary"}
                          className="shadow-sm border-none backdrop-blur-md bg-white/80 dark:bg-card/80 text-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-lg font-bold serif-text group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <CardDescription className="line-clamp-2 pt-1 font-medium italic">
                          {item.description}
                        </CardDescription>
                      </div>
                      <span className="text-primary font-extrabold text-lg">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full py-6 rounded-xl border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 border"
                      onClick={() => (window.location.hash = "#menu")}
                    >
                      Ver en el menú
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Added cn import that I forgot initially
import { cn } from "@/lib/utils";
