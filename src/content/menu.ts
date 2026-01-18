export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Brasa" | "Vegetariano" | "Mariscos" | "Postres";
  tags?: ("Nuevo" | "Favorito" | "Sin gluten")[];
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Costillas al Roble",
    description:
      "Costillas de cerdo cocinadas a fuego lento durante 8 horas con leña de roble.",
    price: 12500,
    category: "Brasa",
    tags: ["Favorito"],
    image: "/images/menu/costillas.jpg",
  },
  {
    id: "2",
    name: "Risotto de Hongos Silvestres",
    description:
      "Arroz cremoso con variedad de hongos locales y aceite de trufa blanca.",
    price: 9800,
    category: "Vegetariano",
    tags: ["Sin gluten"],
    image: "/images/menu/risotto.jpg",
  },
  {
    id: "3",
    name: "Pulpo a la Parrilla",
    description:
      "Tentáculo de pulpo marinado en pimentón de la vera y aceite de oliva virgen.",
    price: 14200,
    category: "Mariscos",
    tags: ["Nuevo"],
    image: "/images/menu/pulpo.jpg",
  },
  {
    id: "4",
    name: "Entrecot Madagascar",
    description:
      "Corte premium a la brasa con salsa cremosa de pimienta verde.",
    price: 16500,
    category: "Brasa",
    image: "/images/menu/entrecot.jpg",
  },
  {
    id: "5",
    name: "Ensalada del Huerto",
    description:
      "Verduras de temporada asadas, queso de cabra y vinagreta de miel.",
    price: 7500,
    category: "Vegetariano",
    tags: ["Sin gluten"],
    image: "/images/menu/ensalada.jpg",
  },
  {
    id: "6",
    name: "Mousse de Chocolate y Sal",
    description: "Chocolate amargo 70%, escamas de sal marina y frutos rojos.",
    price: 5200,
    category: "Postres",
    tags: ["Favorito"],
    image: "/images/menu/mousse.jpg",
  },
];

export const specialties = menuItems.slice(0, 3);
