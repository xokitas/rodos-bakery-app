import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  label,
  items,
  onNavigate,
}: {
  label?: string
  onNavigate: (view: string) => void
  items: {
    title: string
    url: string
    icon?: React.ReactNode
  }[]
}) {
  return (
    <SidebarGroup>
      {/* Solo renderiza la etiqueta si fue declarada (así el botón de Inicio queda limpio arriba) */}
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      
      <SidebarGroupContent className="flex flex-col gap-1.5">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                tooltip={item.title} 
                onClick={() => onNavigate(item.url)}
                // 💡 CLASES DE ANIMACIÓN ACTUALIZADAS CON MARRÓN Y ALTO CONTRASTE (85% OPACIDAD)
                className="transition-all duration-200 ease-in-out 
                           hover:bg-amber-950/85 hover:text-white 
                           dark:hover:bg-amber-900/85 dark:hover:text-white 
                           active:scale-[0.97] active:opacity-70"
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}