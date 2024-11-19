import { create } from "zustand";

// Define the shape of the store
interface ScrollStore {
  shouldScroll: string; // This can be adjusted to a more specific type if needed
  setShouldScroll: (value: string) => void;
}

// Create the Zustand store with the defined type
const useScrollStore = create<ScrollStore>((set) => ({
  shouldScroll: '',
  setShouldScroll: (value) => set({ shouldScroll: value }),
}));

export default useScrollStore;
