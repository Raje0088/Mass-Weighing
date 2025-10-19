import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Gallery from "./component/Gallery";
import About from "./component/About";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Whatapp from "./component/Whatapp";
import GSAPCarousel from "./component/GSAPCarousel.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import ThreeDEffect from "./component/ThreeDEffect.jsx";
import AnimateText from "./component/AnimateText.jsx";
import Testemonial from "./component/Testemonial.jsx";
import Queries from "./component/Queries.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <GSAPCarousel />
              {/* <AnimateText/> */}
              <Gallery />
              <About />
              <Product />
              {/* <ThreeDEffect /> */}
              <Testemonial />
              <div id="queries">
                <Queries />
              </div>
              <Contact />
            </>
          }
        />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <Whatapp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
