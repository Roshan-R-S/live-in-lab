import { CartItem } from '../../types';

export interface CartSlice {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const createCartSlice = (set: any): CartSlice => ({
  cart: [],
  addToCart: (item) =>
    set((state: any) => {
      const existingItem = state.cart.find((i: CartItem) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i: CartItem) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (id) =>
    set((state: any) => ({
      cart: state.cart.filter((item: CartItem) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state: any) => ({
      cart: state.cart.map((item: CartItem) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
});