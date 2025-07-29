import { type Product } from "@/types";

export default function ProductCard({ id, name, imageUrl, description, price }: Product) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <picture>
        <img src={imageUrl} alt="Product Image" />
      </picture>
      <p>{description}</p>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}
