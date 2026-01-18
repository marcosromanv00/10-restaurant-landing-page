import { z } from "zod";

export const reservationSchema = z.object({
  date: z.string().min(1, "La fecha es obligatoria"),
  time: z.string().min(1, "La hora es obligatoria"),
  guests: z.string().min(1, "El número de personas es obligatorio"),
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  phone: z.string().min(8, "Ingresa un número de teléfono válido"),
  notes: z.string().optional(),
});

export type ReservationData = z.infer<typeof reservationSchema>;

export const eventSchema = z.object({
  name: z.string().min(3, "Nombre obligatorio"),
  email: z.string().email("Email inválido"),
  date: z.string().min(1, "Fecha obligatoria"),
  type: z.string().min(1, "Tipo de evento obligatorio"),
});

export type EventData = z.infer<typeof eventSchema>;
