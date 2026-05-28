import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const WhyChooseUs = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Why Choose Us",
    hasImage: false,
    hasBulletPoints: true,
    inputFields: [],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Why Choose Us data...");
    const response = await apiGet("/public/why-choose-us");
    console.log("Why Choose Us response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Why Choose Us data:", data);
    const formData = new FormData();

    const wcuData = { bulletPoints: data.bulletPoints };
    formData.append("whyChooseUs", JSON.stringify(wcuData));

    const response = await apiPostFormData("/why-choose-us", formData);
    if (response.success) {
      alert("Why Choose Us saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Why Choose Us section?")) return;
    const response = await apiDelete("/why-choose-us");
    if (response.success) {
      alert("Why Choose Us deleted!");
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
        title="Why Choose Us"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default WhyChooseUs;
