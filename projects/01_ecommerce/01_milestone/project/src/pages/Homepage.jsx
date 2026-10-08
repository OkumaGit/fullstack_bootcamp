import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    description: "A beautiful shoes",
    price: 89.99,
    category: "Footwear",
  },
  {
    id: 2,
    name: "Yoga Mat",
    description: "Best in class Yoga Mat",
    price: 24.99,
    category: "Fitness",
  },
  {
    id: 3,
    name: "Water Bottle",
    description: "A Stainless steel Water Bottle",
    price: 14.99,
    category: "Hydration",
  },
];

function Homepage() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* Main Content Component */}
      <Main products={products} />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Homepage;
