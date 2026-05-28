import React, { useState } from "react";

const ListEditor = ({ label, items, placeholder, onChange }) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    onChange(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
          onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <button
          type="button"
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg border border-gray-200"
          >
            <span className="text-gray-700 text-nowrap overflow-hidden text-ellipsis flex-1">
              {item}
            </span>
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="ml-2 text-red-500 hover:text-red-700 transition-colors"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListEditor;
