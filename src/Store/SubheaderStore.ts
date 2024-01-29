
import { create } from 'zustand';

interface SubheaderState {
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => void;
}

export const useSubheaderStore = create<SubheaderState>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: (open) => set({ isDrawerOpen: open }),
}));
