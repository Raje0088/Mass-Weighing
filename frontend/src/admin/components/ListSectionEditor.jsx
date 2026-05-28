import React, { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm";
import DataDisplay from "./DataDisplay";

const ListSectionEditor = ({
  title,
  config,
  getEndpoint,
  postEndpoint,
  putEndpoint,
  deleteEndpoint,
}) => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    console.log(`Loading ${title} items...`);
    const { apiGet } = await import("../../services/api");
    const response = await apiGet(getEndpoint);
    console.log(`${title} response:`, response);
    if (response.success) {
      setItems(response.data || []);
    }
  };

  const handleCreateOrUpdate = async (data) => {
    console.log(`Saving ${title} item:`, data);
    const { apiPostFormData, apiPutFormData } =
      await import("../../services/api");
    const formData = new FormData();

    const itemData = { ...data.inputs, bulletPoints: data.bulletPoints };
    formData.append(
      config.fieldName || title.toLowerCase(),
      JSON.stringify(itemData),
    );

    if (data.image) {
      formData.append("image", data.image);
    }

    let response;
    if (editingId) {
      response = await apiPutFormData(`${putEndpoint}/${editingId}`, formData);
    } else {
      response = await apiPostFormData(postEndpoint, formData);
    }

    if (response.success) {
      alert(`${title} saved successfully!`);
      setEditingId(null);
      setEditingData(null);
      loadItems();
    } else {
      alert(`Error saving ${title}: ${response.error}`);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id || item._id);
    setEditingData(item);
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Delete this ${title}?`)) return;
    const { apiDelete } = await import("../../services/api");
    const response = await apiDelete(`${deleteEndpoint}/${id}`);
    if (response.success) {
      alert(`${title} deleted!`);
      loadItems();
    }
  };

  return (
    <div className="p-6 space-y-6">
      <DynamicForm
        config={config}
        initialData={editingData}
        onSave={handleCreateOrUpdate}
      />

      {editingId && (
        <button
          onClick={() => {
            setEditingId(null);
            setEditingData(null);
          }}
          className="mb-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          Cancel Edit
        </button>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700">All {title}s</h3>
        {items.map((item) => (
          <div key={item.id || item._id} className="space-y-2">
            <DataDisplay
              title={title}
              data={item}
              config={config}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item.id || item._id)}
            />
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-gray-500">
            No {title.toLowerCase()}s yet. Create your first one!
          </p>
        )}
      </div>
    </div>
  );
};

export default ListSectionEditor;
