import * as React from "react"
import { Cake, Croissant, FileText, Calculator, CakeSlice, Dessert, Package, Store, History, RefreshCw, LayoutDashboardIcon } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onNavigate: (view: string) => void;
}

export function AppSidebar({ onNavigate, ...props }: AppSidebarProps) {  
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Cabecera estática con tu marrón oscuro corporativo */}
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3 py-4">
          {/* 💡 Cambiado a bg-amber-950 (Marrón muy oscuro). Reemplázalo por tu hex exacto si usas uno personalizado */}
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-amber-950 text-amber-50 dark:bg-amber-900">
            <Dessert className="size-5" />
          </div>
          <span className="truncate text-lg font-bold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
            Rodo's Bakery
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {/* 💡 SECCIÓN NUEVA: Botón de Inicio (Home) sin etiqueta de grupo */}
        <NavMain
          onNavigate={onNavigate}
          items={[
            { title: "Inicio", url: "dashboard", icon: <LayoutDashboardIcon size={18} /> },
          ]}
        />

        {/* Sección 1: PRODUCCIÓN */}
        <NavMain
          label="Producción"
          onNavigate={onNavigate}
          items={[
            { title: "Dulces Finos", url: "finos", icon: <CakeSlice size={18} /> },
            { title: "Hojaldres", url: "hojaldres", icon: <Croissant size={18} /> },
            { title: "Cakes", url: "cakes", icon: <Cake size={18} /> },
          ]}
        />

        {/* Sección 2: DOCUMENTOS */}
        <NavMain
          label="Documentos"
          onNavigate={onNavigate}
          items={[
            { title: "Ficha Técnica", url: "ficha-tecnica", icon: <FileText size={18} /> },
            { title: "Ficha de Costo", url: "ficha-costo", icon: <Calculator size={18} /> },
            { title: "Historial de Ventas", url: "historial-ventas", icon: <History size={18} /> },
          ]}
        />

        {/* Sección 3: INVENTARIO */}
        <NavMain
          label="Inventario"
          onNavigate={onNavigate}
          items={[
            { title: "Materia Prima", url: "materia-prima", icon: <Package size={18} /> },
            { title: "Vitrina", url: "vitrina", icon: <Store size={18} /> },
          ]}
        />
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className="w-full flex items-center justify-center gap-2 font-medium tracking-wide shadow-sm transition-all duration-200 
                        bg-emerald-800 text-emerald-50 hover:bg-emerald-700 active:bg-emerald-900
                        dark:bg-emerald-950 dark:text-emerald-200 dark:hover:bg-emerald-900"
              size="lg"
              onClick={() => {
                console.log("Iniciando petición de sincronización...");
              }}
            >
              <RefreshCw size={16} className="animate-spin-slow" />
              <span className="group-data-[collapsible=icon]:hidden">
                Actualizar Ventas
              </span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}