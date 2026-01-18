import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Specials } from "@/components/sections/Specials";
import { Menu } from "@/components/sections/Menu";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { Experience } from "@/components/sections/Experience";
import { LocationHours } from "@/components/sections/LocationHours";
import { Reviews } from "@/components/sections/Reviews";
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Navbar />
      <Hero />
      <Specials />
      <Menu />
      <Experience />
      <Reviews />
      <ReservationForm />
      <Events />
      <LocationHours />
      <Footer />
    </main>
  );
}
