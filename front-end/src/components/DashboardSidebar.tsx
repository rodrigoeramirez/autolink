import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import {User, Car, House, Settings} from "lucide-react"

  // Menu items.
const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Mis Autos",
      url: "/dashboard/autos",
      icon: Car,
    },
    {
      title: "Mi Cuenta",
      url: "#",
      icon: User,
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings,
    },
  ]
  
  export function AppSidebar() {
    
    return (
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                      
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )
  }