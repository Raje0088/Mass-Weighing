import React, { useState, useEffect } from "react";
import DynamicForm from "../admin/components/DynamicForm";
import DataDisplay from "../admin/components/DataDisplay";
import { apiPostFormData, apiGet, apiDelete } from "../services/api";

const LogoAndMetadata = () => {
  const [existingData, setExistingData] = useState(null);

  const config = {
    title: "Logo & Metadata",
    hasImage: true,
    hasBulletPoints: false,
    inputFields: [
      {
        key: "siteTitle",
        label: "Site Title",
        placeholder: "Enter site title",
      },
      {
        key: "siteDescription",
        label: "Site Description",
        type: "textarea",
        placeholder: "Enter site description",
      },
      {
        key: "metaKeywords",
        label: "Meta Keywords",
        placeholder: "Enter meta keywords (comma-separated)",
      },
      {
        key: "googleAnalyticsCode",
        label: "Google Analytics Code",
        type: "textarea",
        placeholder: "Enter Google Analytics (GTAG) code",
      },
      {
        key: "rssFeedUrl",
        label: "RSS Feed URL",
        placeholder: "Enter RSS feed URL",
      },
      {
        key: "sitemapXml",
        label: "Sitemap XML Content",
        type: "textarea",
        placeholder: "Enter sitemap.xml content",
      },
      {
        key: "robotsTxt",
        label: "Robots.txt Content",
        type: "textarea",
        placeholder: "Enter robots.txt content",
      },
    ],
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("Loading Logo & Metadata data...");
    const response = await apiGet("/public/logo-metadata");
    console.log("Logo & Metadata response:", response);
    if (response.success) {
      setExistingData(response.data);
    }
  };

  const handleSave = async (data) => {
    console.log("Saving Logo & Metadata data:", data);
    const formData = new FormData();

    const metadata = { ...data.inputs };
    formData.append("logoAndMetadata", JSON.stringify(metadata));

    if (data.image) {
      formData.append("logo", data.image);
    }

    const response = await apiPostFormData("/logo-metadata", formData);
    if (response.success) {
      alert("Logo & Metadata saved successfully!");
      loadData();
    } else {
      alert("Error saving: " + response.error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete Logo & Metadata?")) return;
    const response = await apiDelete("/logo-metadata");
    if (response.success) {
      alert("Logo & Metadata deleted!");
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
        title="Logo & Metadata"
        data={existingData}
        config={config}
        onEdit={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default LogoAndMetadata;
