import { createContext, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  imageUrl: string;
  quantity: number;
  price: number;
  isRare: boolean;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        // Substitui a quantidade pelo novo valor
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: item.quantity } : i
        );
      }
      // Se não existe, adiciona novo
      return [...prev, item];
    });
  }

  function removeFromCart(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}