import React from "react";

const TextInput = ({ label, type, value, onChange, placeholder }) => {
  const Tag = type === "textarea" ? "textarea" : "input";
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-blue-700">{label}</label>
      <Tag
        type={type === "textarea" ? undefined : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={type === "textarea" ? 4 : undefined}
      />
    </div>
  );
};

export default TextInput;
