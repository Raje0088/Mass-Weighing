import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const Cards = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Cards",
    hasImage: true,
    hasBulletPoints: true,
    inputFields: [
      { key: "title", label: "Card Title", placeholder: "Enter card title" },
      {
        key: "subtitle",
        label: "Card Subtitle",
        placeholder: "Enter card subtitle",
      },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Enter description",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Cards data...");
    const response = await apiGet("/public/cards");
    console.log("Cards response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Cards data:", data);
    const formData = new FormData();

    const cardData = { ...data.inputs, bulletPoints: data.bulletPoints };
    formData.append("card", JSON.stringify(cardData));

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await apiPostFormData("/cards", formData);
    if (response.success) {
      alert("Card saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Card?")) return;
    const response = await apiDelete("/cards");
    if (response.success) {
      alert("Card deleted!");
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
        title="Card"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Cards;
