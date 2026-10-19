import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import type { Product } from "../types";

interface HomePageProps {
  cart: Product[];
}

function HomePage({ cart }: HomePageProps) {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      {/* Main Content Component */}
      <Main />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomePage;
