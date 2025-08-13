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
  price: number;
  category?: number | null;
  created_at?: string;
}

export interface ProductVariant {
  id: number;
  product: Product;
  color: string;
  productimages: ProductImage[];
  productsizes?: ProductSize[];
}

export interface ProductImage {
  id: number;
  productVariant: number;
  image: string;
}

export interface ProductSize {
  id: number;
  productVariant: number;
  size: string;
  stock: number;
}