import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Gallery from "./component/Gallery";
import About from "./component/About";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Gallery />
      <About />
      <Product/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
