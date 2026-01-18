"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, ReservationData } from "@/lib/validation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { storage, RESERVATION_STORAGE_KEY } from "@/lib/storage";
import {
  Calendar,
  Users,
  Clock,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";

export function ReservationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [lastReservation, setLastReservation] =
    React.useState<ReservationData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    storage.set(RESERVATION_STORAGE_KEY, data);
    setLastReservation(data);
    setIsSubmitting(false);
    toast("¡Mesa solicitada con éxito!", "success");
    reset();
  };

  const copyWhatsApp = () => {
    if (!lastReservation) return;
    const text = `Hola Brasa & Oliva, me gustaría confirmar mi reserva:\n\nNombre: ${lastReservation.name}\nFecha: ${lastReservation.date}\nHora: ${lastReservation.time}\nPersonas: ${lastReservation.guests}\nNotas: ${lastReservation.notes || "Ninguna"}`;
    navigator.clipboard.writeText(text);
    toast("Mensaje copiado para WhatsApp", "info");
  };

  return (
    <section id="reservas" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Reserva tu mesa
            </h2>
            <p className="text-muted-foreground text-lg">
              Asegura tu lugar en nuestra mesa. Recomendamos reservar con al
              menos 24 horas de antelación, especialmente para fines de semana.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-secondary">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">¿Prefieres llamar?</p>
                  <p className="text-sm">+506 2026-0000</p>
                </div>
              </div>
            </div>

            {lastReservation && (
              <div className="p-6 bg-white rounded-2xl border-2 border-primary/20 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                <p className="font-bold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Última reserva realizada
                </p>
                <p className="text-sm text-muted-foreground">
                  Para {lastReservation.name} el {lastReservation.date} a las{" "}
                  {lastReservation.time}.
                </p>
                <Button size="sm" variant="outline" onClick={copyWhatsApp}>
                  Copiar para WhatsApp
                </Button>
              </div>
            )}
          </div>

          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Fecha"
                  type="date"
                  {...register("date")}
                  error={errors.date?.message}
                />
                <Input
                  label="Hora"
                  type="time"
                  {...register("time")}
                  error={errors.time?.message}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Personas"
                  type="number"
                  placeholder="Ej: 4"
                  {...register("guests")}
                  error={errors.guests?.message}
                />
                <Input
                  label="Tu Teléfono"
                  placeholder="+506 ...."
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>
              <Input
                label="Nombre Completo"
                placeholder="Juan Pérez"
                {...register("name")}
                error={errors.name?.message}
              />
              <div className="space-y-1.5">
                <label className="text-sm font-medium">
                  Notas especiales (opcional)
                </label>
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Ej: Alergias, cumpleaños, mesa en terraza..."
                  {...register("notes")}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Solicitando..." : "Confirmar Reserva"}
              </Button>
              <p className="text-[10px] text-center text-muted-foreground">
                Al reservar, aceptas nuestra política de privacidad y términos
                de servicio.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
