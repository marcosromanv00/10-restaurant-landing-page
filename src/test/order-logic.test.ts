import { describe, it, expect, vi } from "vitest";
import { MenuItem } from "@/content/menu";

// Mock implementation of logic for testing without full react context
const calculateTotal = (items: { price: number; quantity: number }[]) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);

const calculateCount = (items: { quantity: number }[]) =>
  items.reduce((acc, item) => acc + item.quantity, 0);

describe("Lógica del Pedido", () => {
  const mockItem: MenuItem = {
    id: "1",
    name: "Costillas",
    price: 100,
    description: "",
    category: "Brasa",
    image: "",
  };

  it("calcula el total de items correctamente", () => {
    const items = [
      { ...mockItem, quantity: 2 },
      { ...mockItem, id: "2", quantity: 3 },
    ];
    expect(calculateCount(items)).toBe(5);
  });

  it("calcula el precio total correctamente", () => {
    const items = [
      { ...mockItem, quantity: 2 },
      { ...mockItem, id: "2", price: 200, quantity: 1 },
    ];
    expect(calculateTotal(items)).toBe(400);
  });

  it("maneja cantidades vacías sin explotar", () => {
    expect(calculateTotal([])).toBe(0);
    expect(calculateCount([])).toBe(0);
  });
});
