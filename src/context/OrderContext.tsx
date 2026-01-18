"use client";

import * as React from "react";
import { MenuItem } from "@/content/menu";
import { storage, ORDER_STORAGE_KEY } from "@/lib/storage";

export interface OrderItem extends MenuItem {
  quantity: number;
}

interface OrderContextType {
  items: OrderItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearOrder: () => void;
  totalItems: number;
  totalPrice: number;
}

const OrderContext = React.createContext<OrderContextType | undefined>(
  undefined,
);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<OrderItem[]>([]);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Load from localStorage
  React.useEffect(() => {
    const savedOrder = storage.get(ORDER_STORAGE_KEY);
    if (savedOrder) setItems(savedOrder);
    setIsInitialized(true);
  }, []);

  // Save to localStorage
  React.useEffect(() => {
    if (isInitialized) {
      storage.set(ORDER_STORAGE_KEY, items);
    }
  }, [items, isInitialized]);

  const addItem = (item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  const clearOrder = () => setItems([]);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <OrderContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearOrder,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = React.useContext(OrderContext);
  if (!context)
    throw new Error("useOrder must be used within an OrderProvider");
  return context;
}
