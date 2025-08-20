import type { APIRoute } from "astro";
import { mockProducts } from "@/lib/mock-data";

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify(mockProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};