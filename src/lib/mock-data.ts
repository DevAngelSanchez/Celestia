import { faker } from "@faker-js/faker";
import type { Category } from "@/types/types";

export interface ProductImage {
  id: string;
  image: string;
}

export interface Sizes {
  size: "S" | "M" | "L" | "XL";
  stock: number;
}

export interface ProductVariant {
  id: string;
  color: string;
  product: {
    name: string;
    description: string;
    sku: string;
  }
  price: string;
  images: ProductImage[];
  sizes: Sizes[];
}

export function createMockProducts(count: number = 10): ProductVariant[] {
  const products: ProductVariant[] = [];

  for (let i = 0; i < count; i++) {
    const productName = faker.commerce.productName();
    products.push({
      id: faker.string.uuid(),
      color: faker.color.human(),
      product: {
        name: productName,
        description: faker.commerce.productDescription(),
        sku: faker.string.ulid()
      },
      price: faker.commerce.price({ min: 10, max: 200, dec: 2 }),
      images: [
        {
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos()
        },
        {
          id: faker.string.uuid(),
          image: faker.image.urlPicsumPhotos()
        },
      ],
      sizes: [
        { size: "S", stock: faker.number.int({ max: 50 }) },
        { size: "M", stock: faker.number.int({ max: 50 }) },
        { size: "L", stock: faker.number.int({ max: 50 }) },
      ]
    })
  }

  return products;
}

export function createMockCategories(count: number = 10): Category[] {
  const categories: Category[] = [];

  for (let i = 0; i < count; i++) {
    const categoryName = faker.commerce.department();
    const slug = `${categoryName}-${faker.string.uuid().slice(0, 4)}`;
    categories.push({
      id: faker.number.int(),
      name: categoryName,
      slug,
      subcategory_of: null
    });
  }

  return categories;
}

export const mockProducts = createMockProducts(20);
export const mockCategories = createMockCategories(20);