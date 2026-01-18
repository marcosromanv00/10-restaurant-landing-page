"use client";

import { OrderProvider } from "@/context/OrderContext";
import { ToastProvider } from "@/components/ui/Toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <OrderProvider>{children}</OrderProvider>
    </ToastProvider>
  );
}
