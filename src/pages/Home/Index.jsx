import { Animated } from "react-animated-css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import Carousel from "./components/Carousel";
import Cards from "../Cards/Index";
import "./Index.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <main>
        <div className="container">
          <section className="outstanding">
            <h2 className="title">Destacados</h2>
            <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              animateOnce={true}
            >
              <Cards />
            </AnimationOnScroll>
          </section>
          <section>
            <h2 className="title">Esta semana</h2>
            <AnimationOnScroll
              animateIn="animate__bounceInRight"
              animateOnce={true}
            >
              <Cards />
            </AnimationOnScroll>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
