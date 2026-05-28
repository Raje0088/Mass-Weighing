import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const About = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "About Us",
    hasImage: true,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Enter description",
      },
      {
        key: "yoe",
        label: "Years of Experience (YOE)",
        type: "number",
        placeholder: "Enter years",
      },
      {
        key: "projectCompleted",
        label: "Projects Completed",
        type: "number",
        placeholder: "Enter number",
      },
      {
        key: "customerSatisfaction",
        label: "Customer Satisfaction (%)",
        type: "number",
        placeholder: "Enter %",
      },
      {
        key: "teamMember",
        label: "Team Members",
        type: "number",
        placeholder: "Enter number",
      },
      {
        key: "videoUrl",
        label: "Video Url",
        type: "string",
        placeholder: "Enter Url",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading About data...");
    const response = await apiGet("/public/about");
    console.log("About response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving About data:", data);
    const formData = new FormData();

    const aboutData = {
      ...data.inputs,
      yoe: parseInt(data.inputs.yoe) || 0,
      projectCompleted: parseInt(data.inputs.projectCompleted) || 0,
      customerSatisfaction: parseInt(data.inputs.customerSatisfaction) || 0,
      teamMember: parseInt(data.inputs.teamMember) || 0,
    };
    formData.append("about", JSON.stringify(aboutData));

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await apiPostFormData("/about", formData);
    if (response.success) {
      alert("About saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete About section?")) return;
    const response = await apiDelete("/about");
    if (response.success) {
      alert("About deleted!");
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
        title="About"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default About;
