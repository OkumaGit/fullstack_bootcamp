import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, description, category, image } = product;

  return (
    <div className="flex justify-between flex-col gap-y-[5px] border-t-4 border-blue-500 p-4 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
      <div>
        <span className="w-fit text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-0.5 rounded">
          {category}
        </span>
        <img
          className="w-36 h-36 object-contain mx-auto mb-4"
          src={image}
          alt={title}
        />
        <h3>
          <strong>{title}</strong>
        </h3>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-green-600 py-2">{price}$</span>
        <Link
          to={`/product/${id}`}
          className="text-center text-sm text-blue-500 hover:underline"
        >
          View Details
        </Link>
        <button
          onClick={() =>
            addToCart
              ? addToCart(product)
              : "no addToCart recieved in ProductCard"
          }
          className="cursor-pointer rounded-full bg-black px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
