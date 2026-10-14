import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Product } from "../types";
import CartItem from "../components/CartItem";

interface CartPageProps {
  cart: Product[];
}

function CartPage({ cart }: CartPageProps) {
  if (cart.length <= 0) {
    return <div>No cart found</div>;
  }
  return (
    <div>
      CartPage{" "}
      {cart.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default CartPage;
