import { useState } from "react"; 
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import data from "./data.json"

export default function Page() {
  // 1. EL INTERRUPTOR:
  // 'view' es la variable que guarda qué pantalla estamos viendo.
  // 'setView' es la función que usamos para cambiar esa variable.
  const [view, setView] = useState("dashboard");

  // 2. LA LÓGICA DE VISUALIZACIÓN:
  // Esta función decide qué devolver según el valor de 'view'
  const renderContent = () => {
    switch (view) {
      case "dashboard":
        return (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        );
      case "finos":
        // Aquí iría tu componente de Focus Cards para Dulces Finos
        return <div className="p-8"><h1>Vista de Dulces Finos</h1></div>;
      case "hojaldres":
        // Aquí iría tu componente para Hojaldres
        return <div className="p-8"><h1>Vista de Hojaldres</h1></div>;
      default:
        return <div className="p-8">Selecciona una categoría</div>;
    }
  };

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      {/* 3. LE PASAMOS EL "INTERRUPTOR" AL SIDEBAR */}
      {/* Le pasamos 'setView' como una propiedad (prop) para que el sidebar pueda cambiar la vista */}
      <AppSidebar variant="inset" onNavigate={(newView) => setView(newView)} />
      
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            
            {/* 4. AQUÍ SE RENDERIZA LO QUE DECIDIÓ LA FUNCIÓN */}
            {renderContent()}
            
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}