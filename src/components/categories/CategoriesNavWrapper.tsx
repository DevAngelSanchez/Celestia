import { useState, useCallback, useEffect } from "react";
import api from "@/config/axios/api";
import CategoryNavLink from "./CategoryNavLink";
import type { Category } from "@/types";

export default function CategoriesNavWrapper() {

  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = useCallback(async () => {
    const response = await api.get("categories/");
    const data = await response.data;

    const filteredCategories = data.filter((category: Category) => category.subcategory_of === null);

    setCategories(filteredCategories);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav>
      <ul className="flex justify-center items-center gap-6 mt-6">
        {categories && categories.slice(0, 4).map((category) => (
          <CategoryNavLink key={category.id} href={`/categorias/${category.id}`} label={category.name} />
        ))}
        <li>
          <a
            href="/categorias"
            className="flex items-center gap-1 text-black font-semibold text-sm border-b-2 hover:border-black transition-colors"
          >
            <span>Ver todas</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}