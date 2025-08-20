
interface Props {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  };
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border border-black/10 shadow-[0_0_4px] shadow-black/25 rounded-lg overflow-hidden hover:border-black/50" data-key={product.id}>
      <a href={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full max-h-56 h-full object-cover" />
      </a>
      <div className="p-4 border-t">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <span className="block mt-2 text-xl font-bold">{product.price} $</span>
      </div>
    </div>
  );
};
