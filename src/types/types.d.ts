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
  slug: string;
  subcategory_of: number | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category?: number | null;
  slug: string;
  created_at?: string;
}

export interface ProductVariant {
  id: number;
  product: Product;
  sku: string;
  stock: number;
  price: number;
  attributes: {}
  productimages: ProductImageVariant[];
}

export interface ProductImageVariant {
  id: number;
  productVariant: number;
  image: string;
}