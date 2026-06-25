import { FocusCards } from "@/components/ui/focus-cards";
import { dulcesFinosData } from "@/data/dulcesFinos";

export function FinoCatalog() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-200">
        Dulces Finos
      </h2>
      <FocusCards
        cards={dulcesFinosData}
        onCardClick={(title) => {
          console.log("Producto seleccionado:", title);
          // Aquí más adelante podrías cambiar a una vista de detalle
          // usando un nuevo estado, p.ej. setView("finoDetail", title)
        }}
      />
    </div>
  );
}