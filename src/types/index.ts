// src/types/nav.ts (ejemplo de ubicación)
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

export interface NavLink {
  href: string;
  label: string;
  tooltipContent?: string;
  iconName?: IconName;
}

export interface Category {
  id: number;
  name: string;
  subcategory_of: number | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  by_size: boolean;
  sizes?: string[]; // Opcional, si el producto tiene tamaños
  categoryId: number;
  category?: Category; // Relación opcional con la categoría
}