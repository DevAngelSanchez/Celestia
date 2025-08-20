import type { APIRoute } from "astro";
import { mockCategories } from "@/lib/mock-data";

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify(mockCategories), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};