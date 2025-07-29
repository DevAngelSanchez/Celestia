// src/types/nav.ts (ejemplo de ubicación)
import * as LucideIcons from 'lucide-react';

// Este tipo ya lo teníamos en NavLinkWithTooltip.tsx
type IconName = keyof typeof LucideIcons;

export interface NavLink {
  href: string;
  label: string;
  tooltipContent?: string; // Es opcional en el componente, hazlo opcional aquí también
  iconName?: IconName; // ¡Aquí es donde usamos el tipo de unión de nombres de iconos!
}

export interface Category {
  id: number;
  name: string;
  subcategory_of: number | null;
}