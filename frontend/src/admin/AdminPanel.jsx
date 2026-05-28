import React, { useState, useEffect } from "react";
import DynamicForm from "./components/DynamicForm";
import DataDisplay from "./components/DataDisplay";
import { apiGet, apiPostFormData, apiDelete } from "../services/api";

const SECTIONS = [
  { id: "about", label: "About", path: "/public/about", postPath: "/about" },
  {
    id: "address",
    label: "Address",
    path: "/public/address",
    postPath: "/address",
  },
  { id: "cards", label: "Cards", path: "/public/cards", postPath: "/cards" },
  {
    id: "carousel",
    label: "Carousel",
    path: "/public/carousel",
    postPath: "/carousel",
  },
  { id: "hero", label: "Hero", path: "/public/hero", postPath: "/hero" },
  {
    id: "logo-metadata",
    label: "Logo & Metadata",
    path: "/public/logo-metadata",
    postPath: "/logo-metadata",
  },
  { id: "map", label: "Map", path: "/public/map", postPath: "/map" },
  {
    id: "our-expert",
    label: "Our Expert",
    path: "/public/our-expert",
    postPath: "/our-expert",
  },
  {
    id: "product",
    label: "Product",
    path: "/public/product",
    postPath: "/product",
  },
  {
    id: "social-media",
    label: "Social Media",
    path: "/public/social-media",
    postPath: "/social-media",
  },
  {
    id: "testimonial",
    label: "Testimonial",
    path: "/public/testimonial",
    postPath: "/testimonial",
  },
  {
    id: "vision-mission",
    label: "Vision & Mission",
    path: "/public/vision-mission",
    postPath: "/vision-mission",
  },
  {
    id: "why-choose-us",
    label: "Why Choose Us",
    path: "/public/why-choose-us",
    postPath: "/why-choose-us",
  },
];

const getConfig = (id) => {
  switch (id) {
    case "about":
      return {
        title: "About Us",
        hasImage: true,
        hasBulletPoints: true,
        inputFields: [
          { key: "heading", label: "Heading", placeholder: "Enter heading" },
          {
            key: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Enter description",
          },
        ],
      };
    case "hero":
      return {
        title: "Hero Section",
        hasImage: true,
        hasBulletPoints: false,
        inputFields: [
          { key: "heading", label: "Heading", placeholder: "Enter heading" },
          {
            key: "subheading",
            label: "Subheading",
            type: "textarea",
            placeholder: "Enter subheading",
          },
        ],
      };
    default:
      return {
        title: id.charAt(0).toUpperCase() + id.slice(1),
        hasImage: true,
        hasBulletPoints: true,
        inputFields: [
          { key: "title", label: "Title", placeholder: "Enter title" },
          {
            key: "content",
            label: "Content",
            type: "textarea",
            placeholder: "Enter content",
          },
        ],
      };
  }
};

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, [activeSection]);

  const loadData = async () => {
    const section = SECTIONS.find((s) => s.id === activeSection);
    const res = await apiGet(section.path);
    if (res.success) setData(res.data);
  };

  const handleSave = async (formData) => {
    const section = SECTIONS.find((s) => s.id === activeSection);
    const fd = new FormData();
    const payload = { ...formData.inputs, bulletPoints: formData.bulletPoints };
    fd.append(section.id.replace("-", ""), JSON.stringify(payload));
    if (formData.image) fd.append("image", formData.image);
    const res = await apiPostFormData(section.postPath, fd);
    if (res.success) {
      alert("Saved!");
      loadData();
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this section?")) return;
    const section = SECTIONS.find((s) => s.id === activeSection);
    const res = await apiDelete(section.postPath);
    if (res.success) {
      alert("Deleted!");
      setData(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-blue-700 border-b border-blue-200 pb-4">
          Admin Panel
        </h1>
        <nav className="space-y-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activeSection === s.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-6">
        <DynamicForm
          config={getConfig(activeSection)}
          initialData={data}
          onSave={handleSave}
        />
        <DataDisplay
          title={getConfig(activeSection).title}
          data={data}
          config={getConfig(activeSection)}
          onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default AdminPanel;
