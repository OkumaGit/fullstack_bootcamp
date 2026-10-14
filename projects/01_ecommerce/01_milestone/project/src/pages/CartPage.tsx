import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Product } from "../types";

interface CartPageProps {
  cart: Product[];
}

function CartPage({ cart }: CartPageProps) {
  return <div>CartPage {cart.map((element) => element.price)}</div>;
}

export default CartPage;
