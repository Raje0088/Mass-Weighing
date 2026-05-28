import React, { useState, useId } from "react";

const ImageUploader = ({ onChange, existingUrl, label }) => {
  const [preview, setPreview] = useState(existingUrl);
  const uniqueId = useId();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-blue-700">
        {label}
      </label>
      <label htmlFor={uniqueId} className="cursor-pointer">
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center hover:border-blue-500 transition">
          {preview ? (
            <div className="space-y-2">
              <img
                src={preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded"
              />
              <p className="text-xs text-gray-500">Click to change</p>
            </div>
          ) : (
            <div className="py-8 space-y-2">
              <p className="text-gray-500">Drag & drop or click to upload</p>
              <span className="text-blue-600 hover:text-blue-700">
                Choose Image
              </span>
            </div>
          )}
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={uniqueId}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploader;
