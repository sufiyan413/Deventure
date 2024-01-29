import { create } from 'zustand';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface BurgerState {
  drawerOpen: boolean;
  selectedProduct: MenuItem | null;
  setDrawerOpen: (open: boolean) => void;
  setSelectedProduct: (product: MenuItem | null) => void;
}

export const useBurgerStore = create<BurgerState>((set) => ({
  drawerOpen: false,
  selectedProduct: null,
  setDrawerOpen: (open) => set({ drawerOpen: open }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
