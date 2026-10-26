// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import type { Product } from "../types";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

interface CartPageProps {
  cart: Product[];
  removeFromCart: (product: Product) => void;
  decreaseAmount: (product: Product) => void;
}

function CartPage({ cart, removeFromCart, decreaseAmount }: CartPageProps) {
  let total: number = 0;
  const cartContent = () => {
    if (cart.length >= 1) {
      return (
        <main className="p-6 bg-gray-100 min-h-screen">
          <section className="mb-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-blue-700">
                Your cart
              </h2>
              <h2 className="text-2xl font-semibold text-black-700">
                {
                  (cart.map((element) => {
                    total += element.price * element.qty;
                  }),
                  `$${total}`)
                }
              </h2>
            </div>
            <div className="p-6 bg-gray-100 min-h-screen">
              <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                {cart.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      product={product}
                      removeFromCart={removeFromCart}
                      decreaseAmount={decreaseAmount}
                    />
                  );
                })}
              </section>
            </div>
          </section>
        </main>
      );
    }
    return (
      <main className="p-6 bg-gray-100 min-h-screen">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">Your cart</h2>
          <div className="p-6 bg-gray-100 min-h-screen">
            <section className="flex justify-center text-center items-center space-x-6">
              No items in cart
            </section>
          </div>
        </section>
      </main>
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
