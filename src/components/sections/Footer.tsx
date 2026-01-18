"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground">
              {siteConfig.name}
            </h2>
            <p className="text-secondary-foreground/70 max-w-xs">
              Sabor de brasa, calma de hogar. La mejor experiencia gastronómica
              en el corazón de San José.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.instagram}
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.links.facebook}
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-4 text-secondary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary-foreground shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary-foreground shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li>
                <Link href="#menu" className="hover:text-primary-foreground">
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  href="#reservas"
                  className="hover:text-primary-foreground"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  href="#ubicacion"
                  className="hover:text-primary-foreground"
                >
                  Ubicación
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:text-primary-foreground">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/legales" className="hover:text-primary-foreground">
                  Términos y Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-secondary-foreground/70">
              Suscríbete para recibir eventos exclusivos y promociones.
            </p>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Suscrito con éxito!");
              }}
            >
              <Input
                placeholder="tu@email.com"
                className="bg-secondary-foreground/10 border-transparent text-white placeholder:text-white/40"
              />
              <Button variant="primary" className="w-full">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
