import { useAppStore } from "./store/useAppStore";
import Login from "@/screens/login";
import Dashboard from "@/screens/dashboard"; // Asegúrate de que la ruta coincida con tu carpeta de Dashboard

export default function App() {
  const currentScreen = useAppStore((state) => state.currentScreen);

  // Evaluamos qué pantalla mostrar usando un switch limpio
  switch (currentScreen) {
    case "login":
      return <Login />;
    case "dashboard":
      return <Dashboard />;
    default:
      return <Login />;
  }
}