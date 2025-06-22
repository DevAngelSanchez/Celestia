import type { NavLink } from "@/types";
import { NavLinkWithTooltip } from "./NavLinkWithTooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function NavLinkWrapper() {
  const navLinks: NavLink[] = [
    {
      href: "/",
      label: "Inicio",
      tooltipContent: "Inicio",
      iconName: "House",
    },
    {
      href: "/cart",
      label: "Carrito",
      tooltipContent: "Carrito",
      iconName: "ShoppingCart",
    },
    {
      href: "/user-profile",
      label: "Perfil",
      tooltipContent: "Perfil",
      iconName: "User",
    },
  ];
  return (
    <TooltipProvider>
      {
        navLinks && (
          <nav>
            <ul className="flex items-center justify-center gap-4">
              {navLinks.map((link, i) => (
                <NavLinkWithTooltip
                  key={i}
                  href={link.href}
                  label={link.label}
                  tooltipContent={link.tooltipContent}
                  iconName={link.iconName}
                />
              ))}
            </ul>
          </nav>
        )
      }
    </TooltipProvider>
  )
}