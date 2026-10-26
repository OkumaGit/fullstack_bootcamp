/**
 * Header.jsx
 * This component renders the website header, including the title and navigation links.
 * It uses Tailwind CSS classes for styling.
 */
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../App";
import { useContext, useEffect } from "react";

function Header() {
  const { cart } = useContext(CartContext);

  const cartAmount = () => {
    let cartQty = 0;
    cart.map((element) => {
      cartQty += element.qty;
    });
    return cartQty;
  };
  useEffect(() => {
    cartAmount();
  }, []);

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-white">
        <h1 className="text-2xl font-bold">E-Commerce for REDI</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          to={`/`}
          className="flex items-center gap-2 text-white mr-2 hover:underline"
        >
          Home
        </Link>
        <Link
          to={`/products`}
          className="flex items-center gap-2 text-white mr-2 hover:underline"
        >
          Products
        </Link>
        <Link
          to={`/about`}
          className="flex items-center gap-2 text-white mr-2 hover:underline"
        >
          About
        </Link>

        <div style={{ display: "inline-block" }}>
          <Link
            to={`/cart`}
            className="flex items-center gap-2 text-white mr-2 hover:underline"
          >
            <FaShoppingCart />
            <span className="CartNumber text-xs inline-flex h-8 w-8 items-center justify-center font-semibold uppercase tracking-wide text-white bg-black px-0.5 py-0.5 rounded">
              {" "}
              {cart ? cartAmount() : "0"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
