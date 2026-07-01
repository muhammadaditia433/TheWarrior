import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Promo from "../components/Promo";
import MenuPreview from "../components/MenuPreview";
import Developer from "../components/Developer";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Services />
      <Promo />
      <MenuPreview />
      <Developer />
      <Footer />
    </>
    
  );
}

export default Home;