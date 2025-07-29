import type { NavLink } from "@/types";
import { NavLinkWithTooltip } from "./NavLinkWithTooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function NavLinkWrapper() {
  const navLinks: NavLink[] = [
    {
      href: "/user-profile",
      label: "Perfil",
      tooltipContent: "Perfil",
      iconName: "User",
    },
    {
      href: "/cart",
      label: "Carrito",
      tooltipContent: "Carrito",
      iconName: "ShoppingCart",
    },
  ];
  return (
    <TooltipProvider>
      {
        navLinks && (
          <nav className="h-full flex items-start justify-center">
            <ul className="flex items-start justify-center gap-4">
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