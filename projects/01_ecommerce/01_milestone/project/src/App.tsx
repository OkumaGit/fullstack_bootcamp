/**
 * App.jsx
 * This is the root component of the application. It combines the Header and Main components
 * to create the overall structure of the page.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import type { Product } from "./types";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function App() {
  // Cart function
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
    console.log("cart is: ", cart);
  };
  const removeFromCart = (product: Product): void => {
    // setCart([...cart.splice(product.id)]);
    setCart((prev) =>
      prev.filter((item) => {
        item.id !== product.id;
      }),
    );
    console.log(`removed ${product.title} and now cart is: ", cart`);
  };
  //
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage cart={cart} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
