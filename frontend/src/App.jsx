import { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Queries from "./component/Queries.jsx";
import LazySection from "./components/lazy/LazySection";
import {
  GallerySkeleton,
  AboutSkeleton,
  ProductSkeleton,
  TestemonialSkeleton,
  ContactSkeleton,
} from "./components/lazy/Skeletons";
import Whatapp from "./component/Whatapp";
import ChatBox from "./component/ChatBox";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import AdminListEditor from "./admin dashboard/AdminListEditor";
import Login from "./admin dashboard/Login";
import { apiGet } from "./services/api";

const GSAPCarousel = lazy(() => import("./component/GSAPCarousel.jsx"));
const Gallery = lazy(() => import("./component/Gallery"));
const About = lazy(() => import("./component/About"));
const Product = lazy(() => import("./component/Product"));
const Contact = lazy(() => import("./component/Contact"));
const Testemonial = lazy(() => import("./component/Testemonial.jsx"));

function App() {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/admin") || location.pathname === "/login";
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (!isAdminRoute) {
      loadMetadata();
    }
  }, [isAdminRoute]);

  const loadMetadata = async () => {
    const response = await apiGet("/public/logo-metadata");
    if (response.success && response.data) {
      setMetadata(response.data);
    }
  };

  useEffect(() => {
    if (!metadata) return;

    if (metadata.siteTitle) {
      document.title = metadata.siteTitle;
    }

    if (metadata.siteDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = metadata.siteDescription;
    }

    if (metadata.metaKeywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = metadata.metaKeywords;
    }

    if (metadata.googleAnalyticsCode) {
      const existingScript = document.getElementById("google-analytics");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-analytics";
        script.innerHTML = metadata.googleAnalyticsCode;
        document.body.appendChild(script);
      }
    }

    if (metadata.logoUrl) {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = metadata.logoUrl;
      }
    }
  }, [metadata]);

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Carousel />
              </div>
              <LazySection fallback={<div className="min-h-[200px]" />}>
                <GSAPCarousel />
              </LazySection>
              <LazySection fallback={<GallerySkeleton />}>
                <div id="gallery">
                  <Gallery />
                </div>
              </LazySection>
              <LazySection fallback={<AboutSkeleton />}>
                <div id="about">
                  <About />
                </div>
              </LazySection>
              <LazySection fallback={<ProductSkeleton />}>
                <div id="product">
                  <Product />
                </div>
              </LazySection>
              <LazySection fallback={<TestemonialSkeleton />}>
                <Testemonial />
              </LazySection>
              <LazySection fallback={<ContactSkeleton />}>
                <div id="contact">
                  <Contact />
                </div>
              </LazySection>
              <div id="queries">
                <Queries />
              </div>
            </>
          }
        />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            localStorage.getItem("isAdminAuthenticated") === "true" ? (
              <AdminListEditor />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
      {!isAdminRoute && (
        <>
          <Whatapp />
          <ChatBox />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
