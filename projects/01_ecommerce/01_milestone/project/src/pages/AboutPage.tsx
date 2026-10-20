import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <section className="flex justify-center text-center items-center space-x-6">
          About Page
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
