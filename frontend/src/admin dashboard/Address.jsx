import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPost, apiGet, apiDelete } from "../services/api";

const Address = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Address",
    hasImage: false,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "registeredOffice",
        label: "Registered Office",
        type: "textarea",
        placeholder: "Enter registered office address",
      },
      {
        key: "workAddress",
        label: "Work Address",
        type: "textarea",
        placeholder: "Enter work address",
      },
      {
        key: "mapUrl",
        label: "Google Map URL",
        placeholder: "Enter Google Map URL",
      },
    ],
    listFields: [
      { key: "emails", label: "Emails", placeholder: "Email" },
      { key: "mobiles", label: "Mobile Numbers", placeholder: "Mobile" },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Address data...");
    const response = await apiGet("/public/address");
    console.log("Address response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("DynamicForm data:", data);

    const addressData = {
      ...data.inputs,
      ...data.lists,
    };

    console.log("Sending to backend:", addressData);

    const response = await apiPost("/address", addressData);
    if (response.success) {
      alert("Address saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Address?")) return;
    const response = await apiDelete("/address");
    if (response.success) {
      alert("Address deleted!");
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
        title="Address"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Address;
