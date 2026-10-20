// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import type { Product } from "../types";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

interface CartPageProps {
  cart: Product[];
  removeFromCart: (product: Product) => void;
}

function CartPage({ cart, removeFromCart }: CartPageProps) {
  const cartContent = () => {
    if (cart.length >= 1) {
      return (
        <div className="p-6 bg-gray-100 min-h-screen">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </section>
        </div>
      );
    }
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <section className="flex justify-center text-center items-center space-x-6">
          No items in cart
        </section>
      </div>
    );
  };
  return (
    <>
      <Header />
      {cartContent()}
    </>
  );
}

export default CartPage;
