import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import FoodGallery from "@/components/FoodGallery";
import LifestyleGallery from "@/components/LifestyleGallery";
import NewProduct from "@/components/NewProduct";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <FoodGallery />
        <LifestyleGallery />
        <NewProduct />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
