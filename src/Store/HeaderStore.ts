
import { create } from 'zustand';

interface HeaderState {
  isDrawerOpen: boolean;
  searchValue: string;
  badgeContent: number; 
  showBadge: boolean;
  toggleDrawer: (open: boolean) => void;
  setSearchValue: (value: string) => void;
  setShowBadge: (show: boolean, content: number) => void; 
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isDrawerOpen: false,
  searchValue: '',
  badgeContent: 0, 
  showBadge: false,
  toggleDrawer: (open) => set({ isDrawerOpen: open }),
  setSearchValue: (value) => set({ searchValue: value }),
  setShowBadge: (show, content) => set({ showBadge: show, badgeContent: content }),
}));
