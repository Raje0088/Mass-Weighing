import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const Map = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Map",
    hasImage: false,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "mapUrl",
        label: "Map Embed URL",
        type: "textarea",
        placeholder: "Enter map embed URL",
      },
      {
        key: "location",
        label: "Location Name",
        placeholder: "Enter location name",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Map data...");
    const response = await apiGet("/public/map");
    console.log("Map response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Map data:", data);
    const formData = new FormData();

    const mapData = { ...data.inputs };
    formData.append("map", JSON.stringify(mapData));

    const response = await apiPostFormData("/map", formData);
    if (response.success) {
      alert("Map saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Map?")) return;
    const response = await apiDelete("/map");
    if (response.success) {
      alert("Map deleted!");
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
        title="Map"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Map;
