import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPost, apiGet, apiDelete } from "../services/api";

const SocialMedia = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Social Media",
    hasImage: false,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "facebook",
        label: "Facebook URL",
        placeholder: "Enter Facebook URL",
      },
      {
        key: "instagram",
        label: "Instagram URL",
        placeholder: "Enter Instagram URL",
      },
      {
        key: "twitter",
        label: "X (Twitter) URL",
        placeholder: "Enter X (Twitter) URL",
      },
      {
        key: "youtube",
        label: "YouTube URL",
        placeholder: "Enter YouTube URL",
      },
      {
        key: "whatsapp",
        label: "WhatsApp Number",
        placeholder: "Enter WhatsApp Number",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Social Media data...");
    const response = await apiGet("/public/social-media");
    console.log("Social Media response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Social Media data:", data);
    
    const socialData = { ...data.inputs };

    const response = await apiPost("/social-media", socialData);
    if (response.success) {
      alert("Social Media saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Social Media?")) return;
    const response = await apiDelete("/social-media");
    if (response.success) {
      alert("Social Media deleted!");
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
        title="Social Media"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default SocialMedia;
