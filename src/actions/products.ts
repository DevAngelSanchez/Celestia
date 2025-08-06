// src/actions/index.ts

import api from "@/config/axios/api";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

// Correct way to define actions
export const product = {
  createProduct: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "El nombre es obligatorio"),
      description: z.string().min(1, "La descripción es obligatoria"),
      price: z.number().min(0, "El precio debe ser un número positivo"),
      category: z.number().optional(),
      by_size: z.boolean().optional(),
    }),
    async handler(input) {
      try {
        const response = await api.post("products/", input);
        return { success: true, data: response.data };
      } catch (error) {
        console.error("Error creating product:", error);
        return { success: false, error: "Error creating product" };
      }
    },
  }),
  getProducts: defineAction({
    async handler() {
      try {
        const response = await api.get("products/");
        return { success: true, data: response.data };
      } catch (error) {
        console.error("Error fetching products:", error);
        return { success: false, error: "Error fetching products" };
      }
    },
  }),
}