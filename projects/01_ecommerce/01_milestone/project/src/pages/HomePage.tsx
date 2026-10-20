import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function HomePage() {
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
