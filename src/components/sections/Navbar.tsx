"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Calendar, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useOrder } from "@/context/OrderContext";
import { Modal } from "@/components/ui/Modal";
import { cn, formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/content/site";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isOrderOpen, setIsOrderOpen] = React.useState(false);
  const { items, totalItems, totalPrice, updateQuantity, clearOrder } =
    useOrder();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menú", href: "#menu" },
    { name: "Reseñas", href: "#resenas" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Eventos", href: "#eventos" },
  ];

  const copyOrder = () => {
    const text = items
      .map(
        (i) =>
          `${i.quantity}x ${i.name} (${formatCurrency(i.price * i.quantity)})`,
      )
      .join("\n");
    const total = `Total: ${formatCurrency(totalPrice)}`;
    navigator.clipboard.writeText(
      `Mi pedido en Brasa & Oliva:\n\n${text}\n\n${total}`,
    );
    alert("Pedido copiado al portapapeles");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#f8f6f2]/85 backdrop-blur-xl shadow-sm py-3 border-black/5"
          : "bg-transparent py-5 border-transparent",
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-primary transition-transform group-hover:scale-110">
            <UtensilsCrossed className="h-8 w-8" />
          </div>
          <h1 className="serif-text text-xl font-extrabold tracking-tight">
            {siteConfig.name}
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center border-l pl-8 gap-2 ml-4">
            <button className="text-[10px] font-bold text-primary">ES</button>
            <span className="text-muted-foreground/30">|</span>
            <button className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors">
              EN
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="relative rounded-lg border-black/5 bg-white/50"
              onClick={() => setIsOrderOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              onClick={() => (window.location.hash = "#reservas")}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 border-none"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Reservar mesa
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="relative rounded-lg border-black/5 bg-white/50"
            onClick={() => setIsOrderOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f8f6f2] border-b border-black/5"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold serif-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="w-full bg-primary text-white py-4 rounded-xl font-bold border-none"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.hash = "#reservas";
                }}
              >
                Reservar mesa
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Drawer */}
      <Modal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        title="Tu Pedido"
        type="drawer"
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
            <p className="text-muted-foreground">Tu carrito está vacío</p>
            <Button variant="link" onClick={() => setIsOrderOpen(false)}>
              Ver menú
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-4 pb-4 border-b border-black/5"
                >
                  <div className="flex-1">
                    <h4 className="font-bold serif-text">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="h-8 w-8 rounded-lg border border-black/5 flex items-center justify-center hover:bg-muted font-bold"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      className="h-8 w-8 rounded-lg border border-black/5 flex items-center justify-center hover:bg-muted font-bold"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-lg font-bold serif-text">
                <span>Total</span>
                <span className="text-primary">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={clearOrder}
                  className="rounded-xl border-black/5"
                >
                  Vaciar
                </Button>
                <Button
                  onClick={copyOrder}
                  className="rounded-xl bg-primary text-white border-none"
                >
                  Copiar Pedido
                </Button>
              </div>
              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                Pedido simulado para recoger
              </p>
            </div>
          </div>
        )}
      </Modal>
    </header>
  );
}
