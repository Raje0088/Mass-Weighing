import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const VisionAndMission = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Vision & Mission",
    hasImage: true,
    hasBulletPoints: true,
    inputFields: [
      {
        key: "visionHeading",
        label: "Vision Heading",
        placeholder: "Enter vision heading",
      },
      {
        key: "visionDescription",
        label: "Vision Description",
        type: "textarea",
        placeholder: "Enter vision description",
      },
      {
        key: "missionHeading",
        label: "Mission Heading",
        placeholder: "Enter mission heading",
      },
      {
        key: "missionDescription",
        label: "Mission Description",
        type: "textarea",
        placeholder: "Enter mission description",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Vision & Mission data...");
    const response = await apiGet("/public/vision-mission");
    console.log("Vision & Mission response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Vision & Mission data:", data);
    const formData = new FormData();

    const vmData = { ...data.inputs, bulletPoints: data.bulletPoints };
    formData.append("visionAndMission", JSON.stringify(vmData));

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await apiPostFormData("/vision-mission", formData);
    if (response.success) {
      alert("Vision & Mission saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Vision & Mission section?")) return;
    const response = await apiDelete("/vision-mission");
    if (response.success) {
      alert("Vision & Mission deleted!");
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
        title="Vision & Mission"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default VisionAndMission;
