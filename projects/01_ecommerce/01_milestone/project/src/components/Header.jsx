/**
 * Header.jsx
 * This component renders the website header, including the title and navigation links.
 * It uses Tailwind CSS classes for styling.
 */
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../App";
import { useContext, useState } from "react";

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <a href="/" className="text-white">
        <h1 className="text-2xl font-bold">E-Commerce for REDI</h1>
      </a>
      <nav className="flex items-center gap-4">
        <a href="/" className="text-white hover:underline">
          Home
        </a>
        <a href="/products" className="text-white  hover:underline">
          Products
        </a>
        <a href="/about" className="text-white  mr-2 hover:underline">
          About
        </a>
        <div style={{ display: "inline-block" }}>
          <Link
            to={`/cart`}
            className="flex items-center gap-2 text-white mr-2 hover:underline"
          >
            <FaShoppingCart />
            <span className="CartNumber text-xs inline-flex h-8 w-8 items-center justify-center font-semibold uppercase tracking-wide text-white bg-black px-0.5 py-0.5 rounded">
              {" "}
              {cart ? cart.length : "0"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
