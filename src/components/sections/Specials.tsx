"use client";

import * as React from "react";
import Image from "next/image";
import { specialties, MenuItem } from "@/content/menu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Specials() {
  const [filter, setFilter] = React.useState<MenuItem["category"] | "Todos">(
    "Todos",
  );

  const categories: ("Todos" | MenuItem["category"])[] = [
    "Todos",
    "Brasa",
    "Vegetariano",
    "Mariscos",
    "Postres",
  ];

  const filteredSpecials =
    filter === "Todos"
      ? specialties
      : specialties.filter((item) => item.category === filter);

  return (
    <section id="especialidades" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Nuestras Especialidades
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de nuestros platos más emblemáticos, donde la
            tradición se encuentra con la innovación.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "primary" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop`}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant={tag === "Favorito" ? "accent" : "secondary"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="font-bold text-primary">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <CardDescription className="line-clamp-2 pt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Saber más
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
