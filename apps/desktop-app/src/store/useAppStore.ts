import { create } from "zustand";

interface AppState {
  currentScreen: "login" | "dashboard" | "inventario";
  setScreen: (screen: "login" | "dashboard" | "inventario") => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentScreen: "login", // Pantalla inicial
  setScreen: (screen) => set({ currentScreen: screen }),
}));