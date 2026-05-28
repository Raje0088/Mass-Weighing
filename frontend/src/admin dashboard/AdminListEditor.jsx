import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import VisionAndMission from "./VisionAndMission";
import WhyChooseUs from "./WhyChooseUs";
import OurExpertTeam from "./OurExpertTeam";
import Testimonials from "./Testimonials";
import Product from "./Product";
import Cards from "./Cards";
import Caurosel from "./Caurosel";
import Address from "./Address";
import SocialMedia from "./SocialMedia";
import LogoAndMetadata from "./LogoAndMetadata";
import { removeAuthToken } from "../services/api";

const AdminListEditor = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/about", label: "About", component: <About /> },
    // { path: "/admin/hero", label: "Hero", component: <Hero /> },
    // {
    //   path: "/admin/vision-mission",
    //   label: "Vision & Mission",
    //   component: <VisionAndMission />,
    // },
    { path: "/admin/carousel", label: "Carousel", component: <Caurosel /> },
    {
      path: "/admin/why-choose-us",
      label: "Why Choose Us",
      component: <WhyChooseUs />,
    },
    {
      path: "/admin/our-expert",
      label: "Our Expert",
      component: <OurExpertTeam />,
    },
    {
      path: "/admin/testimonial",
      label: "Testimonial",
      component: <Testimonials />,
    },
    { path: "/admin/product", label: "Product", component: <Product /> },
    // { path: "/admin/cards", label: "Cards", component: <Cards /> },
    { path: "/admin/address", label: "Address", component: <Address /> },
    {
      path: "/admin/social-media",
      label: "Social Media",
      component: <SocialMedia />,
    },
    {
      path: "/admin/logo-metadata",
      label: "Logo & Metadata",
      component: <LogoAndMetadata />,
    },
  ];

  const handleLogout = () => {
    removeAuthToken();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-xl p-6 space-y-4">
        <div className="border-b border-blue-200 pb-4">
          <h1 className="text-2xl font-bold text-blue-700">Admin Panel</h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium shadow-md transition"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.path}
              path={item.path.replace("/admin", "")}
              element={item.component}
            />
          ))}
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminListEditor;
