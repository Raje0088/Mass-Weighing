import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Gallery from "./component/Gallery";
import About from "./component/About";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";

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
              <Gallery />
              <About />
              <Product />
              <Contact />
            </>
          }
        />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
