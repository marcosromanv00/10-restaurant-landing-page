"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, EventData } from "@/lib/validation";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
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

  const onSubmit = async (_data: EventData) => {
    await new Promise((r) => setTimeout(r, 1000));

    setIsOpen(false);
    toast("Solicitud de cotización enviada", "success");
    reset();
  };

  return (
    <section id="eventos" className="py-24 bg-card/10 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="serif-text text-4xl md:text-5xl font-extrabold tracking-tight">
            Eventos & Experiencias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Creamos momentos memorables más allá del plato. Descubre nuestras
            noches temáticas y opciones para grupos privados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Card className="group overflow-hidden rounded-2xl border border-black/5 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl bg-white dark:bg-card">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Wine className="h-5 w-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Temático
                </span>
              </div>
              <CardTitle className="text-2xl serif-text font-bold">
                Martes de Vino
              </CardTitle>
              <CardDescription className="font-medium">
                Todos los martes, disfruta de un 30% de descuento en botellas
                seleccionadas y maridaje sugerido por nuestro sommelier.
              </CardDescription>
              <Button
                variant="outline"
                className="w-full py-6 rounded-xl border-primary/20 text-primary font-bold transition-all hover:bg-primary hover:text-white group/btn border"
                onClick={() => (window.location.hash = "#reservas")}
              >
                Reservar Mesa
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="group overflow-hidden rounded-2xl border border-black/5 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl bg-white dark:bg-card">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1520245668368-2484701e3085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Users className="h-5 w-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Privado
                </span>
              </div>
              <CardTitle className="text-2xl serif-text font-bold">
                Eventos Privados
              </CardTitle>
              <CardDescription className="font-medium">
                Salón exclusivo para cenas corporativas, cumpleaños o
                celebraciones familiares. Capacidad hasta 25 personas.
              </CardDescription>
              <Button
                className="w-full py-6 rounded-xl bg-secondary text-white font-bold transition-all hover:brightness-110 border-none shadow-lg shadow-secondary/10"
                onClick={() => setIsOpen(true)}
              >
                Cotizar Evento
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cotizar Evento Privado"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Nombre completo"
            placeholder="Juan Pérez"
            {...register("name")}
            error={errors.name?.message}
            className="rounded-lg bg-[#f5f0eb] border-none"
          />
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="juan@ejemplo.com"
            {...register("email")}
            error={errors.email?.message}
            className="rounded-lg bg-[#f5f0eb] border-none"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                Fecha
              </label>
              <input
                type="date"
                {...register("date")}
                className="flex h-11 w-full rounded-lg border-none bg-[#f5f0eb] px-3 py-2 text-sm font-medium focus:ring-primary focus:ring-2"
              />
              {errors.date?.message && (
                <span className="text-[10px] text-red-500 font-bold">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                Evento
              </label>
              <select
                className="flex h-11 w-full rounded-lg border-none bg-[#f5f0eb] px-3 py-2 text-sm font-medium focus:ring-primary focus:ring-2"
                {...register("type")}
              >
                <option value="">Tipo...</option>
                <option value="corporativo">Corporativo</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="boda">Mini Boda</option>
                <option value="otro">Otro</option>
              </select>
              {errors.type?.message && (
                <span className="text-[10px] text-red-500 font-bold">
                  {errors.type.message}
                </span>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-7 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-sm shadow-xl shadow-primary/20 border-none"
          >
            Enviar solicitud
          </Button>
        </form>
      </Modal>
    </section>
  );
}
