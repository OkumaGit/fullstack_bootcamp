/**
 * App.jsx
 * This is the root component of the application. It combines the Header and Main components
 * to create the overall structure of the page.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductPage";
import type { Product } from "./types";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  decreaseAmount: (product: Product) => void;
}
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseAmount: () => {},
});

function App() {
  // Adding to Cart
  const [cart, setCart] = useState<Product[]>(() => {
    const savedInLocal = localStorage.getItem("cart");
    return savedInLocal ? JSON.parse(savedInLocal) : [];
  });
  const addToCart = (product: Product): void => {
    const isInCart = cart.some((element) => element.id === product.id);
    if (isInCart) {
      setCart(
        cart.map((element) => {
          if (element.id == product.id) {
            console.log("if worked");
            return { ...element, qty: element.qty + 1 };
          }
          return element;
        }),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      console.log("else");
    }
    console.log("cart is: ", cart);
  };
  //
  // Decreasing amount
  const decreaseAmount = (product: Product): void => {
    setCart(
      cart.map((element) => {
        if (element.id === product.id && element.qty > 1) {
          return { ...element, qty: element.qty - 1 };
        }
        return element;
      }),
    );
    if (product.qty == 1) {
      removeFromCart(product);
    }
  };
  //
  // Deleting from Cart
  const removeFromCart = (product: Product): void => {
    setCart((prev) =>
      prev.filter((item) => {
        return item.id !== product.id;
      }),
    );
    console.log(`removed ${product.title} and now cart is: ", cart`);
  };
  //

  //Updating the localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  //

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseAmount }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                decreaseAmount={decreaseAmount}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
