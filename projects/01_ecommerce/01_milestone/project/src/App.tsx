/**
 * App.jsx
 * This is the root component of the application. It combines the Header and Main components
 * to create the overall structure of the page.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import type { Product } from "./types";

function App() {
  // Cart function
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
    console.log("cart is: ", cart);
  };
  //
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} addToCart={addToCart} />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
