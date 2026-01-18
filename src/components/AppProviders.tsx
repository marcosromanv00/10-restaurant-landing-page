"use client";

import * as React from "react";
import { OrderProvider } from "@/context/OrderContext";
import { ToastProvider } from "@/components/ui/Toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ToastProvider>
      <OrderProvider>
        {children}
        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className="fixed bottom-6 left-6 z-50 h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform sm:h-12 sm:w-12 text-xl"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </OrderProvider>
    </ToastProvider>
  );
}
