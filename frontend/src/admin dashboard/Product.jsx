import React, { useState, useEffect } from "react";
import ImageUploader from "../admin/components/ImageUploader";
import TextInput from "../admin/components/TextInput";
import BulletPoints from "../admin/components/BulletPoints";
import {
  apiPostFormData,
  apiGet,
  apiDelete,
  apiPutFormData,
} from "../services/api";

const Product = () => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: [],
    image: null,
    type: "",
    model: "",
    make: "",
    construction: "",
    speed: "",
    weighingRange: "",
    accuracy: "",
    airRequirement: "",
    approvalFromWeightsMeasures: "",
    paint: "",
    loadCell: "",
    pneumatics: "",
    dischargeGate: "",
    display: "",
    controller: "",
    totalizedAndAutoTare: "",
  });

  const detailsFields = [
    { key: "type", label: "Type", placeholder: "Enter type" },
    { key: "model", label: "Model", placeholder: "Enter model" },
    { key: "make", label: "Make", placeholder: "Enter make" },
    {
      key: "construction",
      label: "Construction",
      placeholder: "Enter construction",
    },
    { key: "speed", label: "Speed", placeholder: "Enter speed" },
    {
      key: "weighingRange",
      label: "Weighing Range",
      placeholder: "Enter weighing range",
    },
    { key: "accuracy", label: "Accuracy", placeholder: "Enter accuracy" },
    {
      key: "airRequirement",
      label: "Air Requirement",
      placeholder: "Enter air requirement",
    },
    {
      key: "approvalFromWeightsMeasures",
      label: "Approval from Weights & Measures",
      placeholder: "Enter approval",
    },
    { key: "paint", label: "Paint", placeholder: "Enter paint" },
    { key: "loadCell", label: "Load Cell", placeholder: "Enter load cell" },
    { key: "pneumatics", label: "Pneumatics", placeholder: "Enter pneumatics" },
    {
      key: "dischargeGate",
      label: "Discharge Gate",
      placeholder: "Enter discharge gate",
    },
    { key: "display", label: "Display", placeholder: "Enter display" },
    { key: "controller", label: "Controller", placeholder: "Enter controller" },
    {
      key: "totalizedAndAutoTare",
      label: "Totalized & Auto Tare",
      placeholder: "Enter totalized & auto tare",
    },
  ];

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    console.log("Loading products...");
    const response = await apiGet("/public/products");
    console.log("Products response:", response);
    if (response.success) {
      setItems(response.data || []);
    }
  };

  const handleSave = async () => {
    console.log("=== Admin Product.jsx handleSave ===");
    console.log("formData:", formData);
    const fd = new FormData();
    const payload = {
      title: formData.title,
      description: formData.description,
      features: formData.features,
      type: formData.type,
      model: formData.model,
      make: formData.make,
      construction: formData.construction,
      speed: formData.speed,
      weighingRange: formData.weighingRange,
      accuracy: formData.accuracy,
      airRequirement: formData.airRequirement,
      approvalFromWeightsMeasures: formData.approvalFromWeightsMeasures,
      paint: formData.paint,
      loadCell: formData.loadCell,
      pneumatics: formData.pneumatics,
      dischargeGate: formData.dischargeGate,
      display: formData.display,
      controller: formData.controller,
      totalizedAndAutoTare: formData.totalizedAndAutoTare,
    };
    console.log("payload:", payload);
    fd.append("product", JSON.stringify(payload));
    if (formData.image) {
      fd.append("image", formData.image);
    }
    // Log FormData contents
    console.log("FormData entries:");
    for (let [key, value] of fd.entries()) {
      console.log(`${key}:`, value);
    }

    let response;
    if (editingId) {
      response = await apiPutFormData(`/products/${editingId}`, fd);
    } else {
      response = await apiPostFormData("/products", fd);
    }

    if (response.success) {
      alert(`Product ${editingId ? "updated" : "created"} successfully!`);
      resetForm();
      loadItems();
    } else {
      alert("Error: " + response.error);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title || "",
      description: item.description || "",
      features: item.features || [],
      image: null,
      type: item.type || "",
      model: item.model || "",
      make: item.make || "",
      construction: item.construction || "",
      speed: item.speed || "",
      weighingRange: item.weighingRange || "",
      accuracy: item.accuracy || "",
      airRequirement: item.airRequirement || "",
      approvalFromWeightsMeasures: item.approvalFromWeightsMeasures || "",
      paint: item.paint || "",
      loadCell: item.loadCell || "",
      pneumatics: item.pneumatics || "",
      dischargeGate: item.dischargeGate || "",
      display: item.display || "",
      controller: item.controller || "",
      totalizedAndAutoTare: item.totalizedAndAutoTare || "",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    const response = await apiDelete(`/products/${id}`);
    if (response.success) {
      alert("Product deleted!");
      loadItems();
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      features: [],
      image: null,
      type: "",
      model: "",
      make: "",
      construction: "",
      speed: "",
      weighingRange: "",
      accuracy: "",
      airRequirement: "",
      approvalFromWeightsMeasures: "",
      paint: "",
      loadCell: "",
      pneumatics: "",
      dischargeGate: "",
      display: "",
      controller: "",
      totalizedAndAutoTare: "",
    });
  };

  return (
    <div className="p-6 space-y-8">
      {/* Form */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700">
            {editingId ? "Edit Product" : "Add New Product"}
          </h2>
          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ImageUploader
              label="Product Image"
              existingUrl={
                editingId
                  ? items.find((i) => i.id === editingId)?.imageUrl
                  : null
              }
              onChange={(file) =>
                setFormData((prev) => ({ ...prev, image: file }))
              }
            />
            <BulletPoints
              points={formData.features}
              onChange={(points) =>
                setFormData((prev) => ({ ...prev, features: points }))
              }
            />
          </div>
          <div className="space-y-6">
            <TextInput
              label="Product Title"
              value={formData.title}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, title: val }))
              }
              placeholder="Enter product title"
            />
            <TextInput
              label="Description"
              type="textarea"
              value={formData.description}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, description: val }))
              }
              placeholder="Enter description"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-6">
            Product Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailsFields.map((field) => (
              <TextInput
                key={field.key}
                label={field.label}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, [field.key]: val }))
                }
              />
            ))}
          </div>
        </div>

        <div className="pt-6 flex justify-end gap-3">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200"
          >
            {editingId ? "Update Product" : "Save Product"}
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700">All Products</h3>
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
          >
            <div className="flex gap-6">
              {item.imageUrl && (
                <div className="w-1/5 flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full rounded-lg shadow-sm"
                  />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
                {item.features?.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {item.features.slice(0, 4).map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-gray-500">
            No products yet. Create your first product!
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
