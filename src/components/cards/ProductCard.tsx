
interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden" data-key={product.id}>
      <a href={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <span className="block mt-2 text-xl font-bold">{product.price}</span>
      </div>
    </div>
  );
};
