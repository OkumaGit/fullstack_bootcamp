interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function ProductCard({ id, name, description, price }: ProductCardProps) {
  return (
    <div className="border-t-4 border-blue-500 p-4 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
      <h3>
        <strong>{name}</strong>
      </h3>
      <p>{description}</p>
      <span className="text-green-600">{price}$</span>
    </div>
  );
}

export default ProductCard;
