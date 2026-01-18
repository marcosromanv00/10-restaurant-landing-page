"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, ReservationData } from "@/lib/validation";
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
  Utensils,
  GlassWater,
  Dog,
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
    <section
      id="reservas"
      className="py-24 bg-olive text-white relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-6xl font-bold serif-text mb-6">
              Reserva tu mesa
            </h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Garantiza tu lugar en nuestra mesa. Aceptamos reservas
              individuales y grupos de hasta 12 personas. Recomendamos reservar
              con 24h de antelación.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 transition-transform group-hover:scale-110">
                <Utensils className="h-6 w-6" />
              </div>
              <div>
                <h6 className="font-bold text-lg">Cocina Abierta</h6>
                <p className="text-sm text-white/60">
                  Observa cómo preparamos cada plato con maestría.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 transition-transform group-hover:scale-110">
                <GlassWater className="h-6 w-6" />
              </div>
              <div>
                <h6 className="font-bold text-lg">Coctelería de Autor</h6>
                <p className="text-sm text-white/60">
                  Maridajes exclusivos con destilados locales.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 transition-transform group-hover:scale-110">
                <Dog className="h-6 w-6" />
              </div>
              <div>
                <h6 className="font-bold text-lg">Pet Friendly</h6>
                <p className="text-sm text-white/60">
                  Tus acompañantes de cuatro patas son bienvenidos en terraza.
                </p>
              </div>
            </div>
          </div>

          {lastReservation && (
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 space-y-4 animate-in fade-in slide-in-from-left-4">
              <p className="font-bold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Tu última reserva está guardada
              </p>
              <p className="text-sm text-white/70 italic">
                {lastReservation.name} — {lastReservation.date} —{" "}
                {lastReservation.time}
              </p>
              <Button
                size="sm"
                variant="outline"
                onClick={copyWhatsApp}
                className="bg-white/5 border-white/20 hover:bg-white/10 text-white"
              >
                Copiar para WhatsApp
              </Button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 text-[#171312] shadow-2xl relative overflow-hidden">
          {/* Form Background Accent */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 relative z-10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-primary" /> Fecha
                </label>
                <input
                  type="date"
                  {...register("date")}
                  className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium"
                />
                {errors.date && (
                  <p className="text-[10px] text-red-500 font-bold">
                    {errors.date.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Clock className="h-3 w-3 text-primary" /> Hora
                </label>
                <input
                  type="time"
                  {...register("time")}
                  className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium"
                />
                {errors.time && (
                  <p className="text-[10px] text-red-500 font-bold">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Users className="h-3 w-3 text-primary" /> Comensales
                </label>
                <input
                  type="number"
                  placeholder="2"
                  {...register("guests")}
                  className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium placeholder:text-gray-400"
                />
                {errors.guests && (
                  <p className="text-[10px] text-red-500 font-bold">
                    {errors.guests.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" /> Teléfono
                </label>
                <input
                  placeholder="+506 ...."
                  {...register("phone")}
                  className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium placeholder:text-gray-400"
                />
                {errors.phone && (
                  <p className="text-[10px] text-red-500 font-bold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <User className="h-3 w-3 text-primary" /> Nombre Completo
              </label>
              <input
                placeholder="Ej. Javier Pérez"
                {...register("name")}
                className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium placeholder:text-gray-400"
              />
              {errors.name && (
                <p className="text-[10px] text-red-500 font-bold">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <MessageSquare className="h-3 w-3 text-primary" /> Notas
                (opcional)
              </label>
              <textarea
                {...register("notes")}
                className="w-full bg-[#f5f0eb] border-none rounded-lg focus:ring-primary focus:ring-2 py-3 px-4 text-sm font-medium min-h-[80px] placeholder:text-gray-400"
                placeholder="Ej. Alergias o preferencias..."
              />
            </div>

            <Button
              type="submit"
              className="w-full py-7 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 transition-all uppercase tracking-widest text-sm border-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Solicitando..." : "Confirmar Reserva"}
            </Button>
            <p className="text-[10px] text-center text-gray-400 font-bold">
              Al reservar, aceptas nuestras políticas de cancelación y términos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
