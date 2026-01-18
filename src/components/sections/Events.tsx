"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, EventData } from "@/lib/validation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { Wine, Users, ArrowRight } from "lucide-react";

export function Events() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: EventData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Cotización solicitada:", data);
    setIsOpen(false);
    toast("Solicitud de cotización enviada", "success");
    reset();
  };

  return (
    <section id="eventos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Eventos & Experiencias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creamos momentos memorables más allá del plato. Descubre nuestras
            noches temáticas y opciones para grupos privados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Card className="group overflow-hidden border-2 transition-all hover:border-primary/50">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
            <CardHeader>
              <div className="flex items-center gap-3 text-primary mb-2">
                <Wine className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Temático
                </span>
              </div>
              <CardTitle className="text-2xl">Martes de Vino</CardTitle>
              <CardDescription>
                Todos los martes, disfruta de un 30% de descuento en botellas
                seleccionadas y maridaje sugerido por nuestro sommelier.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full group"
                onClick={() => (window.location.hash = "#reservas")}
              >
                Reservar Mesa
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="group overflow-hidden border-2 transition-all hover:border-primary/50">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1520245668368-2484701e3085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
            <CardHeader>
              <div className="flex items-center gap-3 text-primary mb-2">
                <Users className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Privado
                </span>
              </div>
              <CardTitle className="text-2xl">Eventos Privados</CardTitle>
              <CardDescription>
                Salón exclusivo para cenas corporativas, cumpleaños o
                celebraciones familiares. Capacidad hasta 25 personas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => setIsOpen(true)}>
                Cotizar Evento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cotizar Evento Privado"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Nombre completo"
            placeholder="Juan Pérez"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="juan@ejemplo.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Fecha tentativa"
              type="date"
              {...register("date")}
              error={errors.date?.message}
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Tipo de evento</label>
              <select
                title="Tipo de evento"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register("type")}
              >
                <option value="">Seleccionar...</option>
                <option value="corporativo">Corporativo</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="boda">Mini Boda / Compromiso</option>
                <option value="otro">Otro</option>
              </select>
              {errors.type?.message && (
                <span className="text-xs text-primary font-medium">
                  {errors.type.message}
                </span>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Enviar solicitud
          </Button>
        </form>
      </Modal>
    </section>
  );
}
