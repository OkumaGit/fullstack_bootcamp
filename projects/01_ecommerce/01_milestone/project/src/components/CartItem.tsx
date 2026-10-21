import { Link } from "react-router-dom";
import type { Product } from "../types";

interface CartItemProps {
  product: Product;
  removeFromCart: (product: Product) => void;
}

function CartItem({ product, removeFromCart }: CartItemProps) {
  const { id, title, price, description, category, image } = product;

  return (
    <div className="flex justify-between flex-col gap-y-[5px] border-t-4 border-blue-500 p-4 bg-white shadow-md rounded-lg hover:shadow-xl ">
      <div>
        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 mb-3 py-0.5 rounded">
          {category}
        </span>
        <img
          className="w-12 h-12 object-contain mb-4"
          src={image}
          alt={title}
        />
        <h3>
          <strong>{title}</strong>
        </h3>
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
          onClick={() => {
            removeFromCart(product);
          }}
          className="cursor-pointer rounded-full bg-black px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-blue-500"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
