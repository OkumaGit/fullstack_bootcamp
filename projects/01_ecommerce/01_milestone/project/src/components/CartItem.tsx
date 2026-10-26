import { Link } from "react-router-dom";
import type { Product } from "../types";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

interface CartItemProps {
  product: Product;
  removeFromCart: (product: Product) => void;
  decreaseAmount: (product: Product) => void;
}

function CartItem({ product, removeFromCart, decreaseAmount }: CartItemProps) {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, category, image } = product;
  // const [amount, setAmount] = useState(1);

  return (
    <div className="flex justify-between flex-col gap-y-[5px] border-t-4 border-blue-500 p-4 bg-white shadow-md rounded-lg hover:shadow-xl ">
      <div>
        <div className="flex justify-between">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 mb-3 py-0.5 rounded">
            {category}
          </span>
          <button
            onClick={() => {
              removeFromCart(product);
            }}
            className="cursor-pointer rounded-full  px-5 py-2 text-sm leading-5 font-semibold bg-blue-100 text-black hover:text-white hover:bg-blue-500"
          >
            <FaTrash />
          </button>
        </div>
        <Link
          to={`/product/${id}`}
          className="text-center text-sm text-blue-500 hover:underline"
        >
          <img
            className="w-12 h-12 object-contain mb-4"
            src={image}
            alt={title}
          />
        </Link>

        <h3>
          <strong>{title}</strong>
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-green-600 py-2">{price}$</span>
        <div>
          <button
            onClick={() => {
              // setAmount((prev) => prev + 1);
              addToCart(product);
            }}
            className="cursor-pointer rounded-full  px-5 py-2 text-sm leading-5 font-semibold bg-blue-100 text-black hover:text-white hover:bg-blue-500"
          >
            <FaPlus />
          </button>
          <span className="productAmount px-5">{product.qty}</span>
          <button
            onClick={() => {
              decreaseAmount(product);
            }}
            className="cursor-pointer rounded-full  px-5 py-2 text-sm leading-5 font-semibold bg-blue-100 text-black hover:text-white hover:bg-blue-500"
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
