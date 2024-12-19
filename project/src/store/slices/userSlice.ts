import { User } from '../../types';

export interface UserSlice {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const createUserSlice = (set: any): UserSlice => ({
  user: null,
  setUser: (user) => set({ user }),
});