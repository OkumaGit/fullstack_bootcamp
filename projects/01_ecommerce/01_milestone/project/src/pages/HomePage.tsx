import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import type { Product } from "../types";

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
