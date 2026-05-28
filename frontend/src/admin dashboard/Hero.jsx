import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const Hero = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Hero Section",
    hasImage: true,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "heading",
        label: "Hero Heading",
        placeholder: "Enter hero heading",
      },
      {
        key: "description",
        label: "Hero Description",
        type: "textarea",
        placeholder: "Enter hero description",
      },
      {
        key: "ctaText",
        label: "Call to Action Text",
        placeholder: "Enter CTA text",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Hero data...");
    const response = await apiGet("/public/hero");
    console.log("Hero response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Hero data:", data);
    const formData = new FormData();

    const heroData = { ...data.inputs };
    formData.append("hero", JSON.stringify(heroData));

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await apiPostFormData("/hero", formData);
    if (response.success) {
      alert("Hero saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Hero section?")) return;
    const response = await apiDelete("/hero");
    if (response.success) {
      alert("Hero deleted!");
      setExistingData(null);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <DynamicForm
        config={config}
        initialData={existingData}
        onSave={handleSave}
      />
      <DataDisplay
        title="Hero"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Hero;
