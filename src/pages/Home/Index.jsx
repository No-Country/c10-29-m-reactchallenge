import React, { useState } from "react"
import { Animated } from "react-animated-css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import Carousel from "./components/Carousel";
import Search from "./components/Search";
//import Pagination from "./components/Pagination";
import Cards from "../Cards/Index";
import "./Index.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  return (
    <>
      <Navbar  />
      <Carousel />
      <main>
        <div className="container">
        <Search onSearch = {searchTerm} setSearchTerm = {setSearchTerm}/>
        {/* <Pagination/> */}
       
          <section className="outstanding">
            <h2 className="title">Destacados</h2>
            
            {/* <AnimationOnScroll
              animateIn="animate__bounceInLeft"
              animateOnce={true}
            > */}
              <Cards searchTerm={searchTerm} />
            {/* </AnimationOnScroll> */}
          </section>
          <section className="this-week">
            <h2 className="title">Esta semana</h2>
            <AnimationOnScroll
              animateIn="animate__bounceInRight"
              animateOnce={true}
            >
              <Cards searchTerm={searchTerm}  />
            </AnimationOnScroll>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
