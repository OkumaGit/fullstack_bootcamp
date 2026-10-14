import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import type { Product } from "../types";

// const products = [
//   {
//     id: 1,
//     name: "Running Shoes",
//     description: "A beautiful shoes",
//     price: 89.99,
//     category: "Footwear",
//   },
//   {
//     id: 2,
//     name: "Yoga Mat",
//     description: "Best in class Yoga Mat",
//     price: 24.99,
//     category: "Fitness",
//   },
//   {
//     id: 3,
//     name: "Water Bottle",
//     description: "A Stainless steel Water Bottle",
//     price: 14.99,
//     category: "Hydration",
//   },
// ];

interface HomePageProps {
  cart: Product[];
  addToCart: (product: Product) => void;
}

function HomePage({ addToCart, cart }: HomePageProps) {
  return (
    <div className="App">
      {/* Header Component */}
      <Header cart={cart} />
      {/* Main Content Component */}
      <Main addToCart={addToCart} />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomePage;
