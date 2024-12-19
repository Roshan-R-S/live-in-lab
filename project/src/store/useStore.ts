import { create } from 'zustand';
import { CartSlice, createCartSlice } from './slices/cartSlice';
import { UserSlice, createUserSlice } from './slices/userSlice';
import { SearchSlice, createSearchSlice } from './slices/searchSlice';

interface Store extends CartSlice, UserSlice, SearchSlice {
  logout: () => void;
}

export const useStore = create<Store>((set) => ({
  ...createCartSlice(set),
  ...createUserSlice(set),
  ...createSearchSlice(set),
  logout: () => set((state) => {
    state.clearCart();
    return { user: null };
  }),
}));