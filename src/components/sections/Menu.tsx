"use client";

import { menuItems } from "@/content/menu";
import { useOrder } from "@/context/OrderContext";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export function Menu() {
  const { addItem } = useOrder();
  const { toast } = useToast();

  const handleAdd = (item: (typeof menuItems)[0]) => {
    addItem(item);
    toast(`¡${item.name} agregado al pedido!`, "success");
  };

  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Nuestra Carta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seleccionamos los mejores ingredientes de la temporada para
            ofrecerte sabores auténticos y memorables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item) => (
            <div key={item.id} className="flex gap-6 group items-center">
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-baseline gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      {item.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-b border-dotted border-muted-foreground/30 flex-grow mx-4 hidden sm:block" />
                  <span className="font-bold text-lg">
                    {formatCurrency(item.price)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 italic">
                  {item.description}
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                onClick={() => handleAdd(item)}
              >
                <Plus className="h-5 w-5" />
                <span className="sr-only">Agregar al pedido</span>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            ¿Tienes alguna alergia o preferencia dietética? Infórmanos al
            realizar tu pedido.
          </p>
          <Button
            variant="outline"
            onClick={() => window.open("/menu-completo.pdf")}
          >
            Descargar Menú PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
