"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined,
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-100 flex flex-col gap-3 w-[calc(100%-2rem)] max-w-sm mb-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              layout
              className={cn(
                "flex items-center gap-3 rounded-xl border p-4 shadow-2xl bg-white dark:bg-card text-card-foreground pointer-events-auto",
                t.type === "success" && "border-green-500",
                t.type === "error" && "border-primary",
                t.type === "info" && "border-secondary",
              )}
            >
              <div className="shrink-0">
                {t.type === "success" && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {t.type === "error" && (
                  <AlertCircle className="h-5 w-5 text-primary" />
                )}
                {t.type === "info" && (
                  <Info className="h-5 w-5 text-secondary" />
                )}
              </div>
              <p className="text-sm font-semibold flex-1 pr-6">{t.message}</p>
              <button
                onClick={() =>
                  setToasts((prev) => prev.filter((toast) => toast.id !== t.id))
                }
                className="absolute top-4 right-4 rounded-md p-1 hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4 opacity-50" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
