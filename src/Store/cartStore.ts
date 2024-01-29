import create from 'zustand';

interface CartStore {
  addedToCart: boolean;
  setAddedToCart: (value: boolean) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  addedToCart: false,
  setAddedToCart: (value) => set({ addedToCart: value }),
}));
