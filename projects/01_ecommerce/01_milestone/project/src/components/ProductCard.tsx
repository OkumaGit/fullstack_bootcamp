import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

function ProductCard({
  id,
  category,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-y-[5px] border-t-4 border-blue-500 p-4 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
      <span className="w-fit text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-0.5 rounded">
        {category}
      </span>
      <h3>
        <strong>{name}</strong>
      </h3>
      <p>{description}</p>
      <span className="text-green-600">{price}$</span>
      <div>
        <Link to={`/product/${id}`}>
          <button className="rounded-full bg-black px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-blue-500">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
