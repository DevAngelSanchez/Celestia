import type { APIRoute } from "astro";
import { mockProducts } from "@/lib/mock-data";

export const GET: APIRoute = ({ params }) => {
  const { id } = params;
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ message: "Producto no encontrado" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};