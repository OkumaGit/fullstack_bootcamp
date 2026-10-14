/**
 * Header.jsx
 * This component renders the website header, including the title and navigation links.
 * It uses Tailwind CSS classes for styling.
 */

function Header({ cart }) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">E-Commerce React Project for REDI</h1>
      <nav>
        <a href="/" className="text-white mr-4 hover:underline">
          Home
        </a>
        <a href="/products" className="text-white mr-4 hover:underline">
          Products
        </a>
        <a href="/about" className="text-white hover:underline">
          About
        </a>
        <div>
          <a href="/cart" className="text-white hover:underline">
            Cart
          </a>
          <span className="CartNumber"> {cart ? cart.length : " 0"}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
