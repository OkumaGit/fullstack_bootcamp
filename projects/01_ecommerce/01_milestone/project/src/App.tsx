/**
 * App.jsx
 * This is the root component of the application. It combines the Header and Main components
 * to create the overall structure of the page.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import type { Product } from "./types";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
