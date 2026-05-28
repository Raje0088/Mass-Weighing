import React, { useState, useEffect } from "react";
import ImageUploader from "./ImageUploader";
import TextInput from "./TextInput";
import BulletPoints from "./BulletPoints";
import ListEditor from "./ListEditor";

const DynamicForm = ({ config, initialData, onSave }) => {
  const [data, setData] = useState({
    image: null,
    inputs: {},
    bulletPoints: [],
    lists: {},
  });

  useEffect(() => {
    if (initialData) {
      setData({
        image: null,
        inputs: config.inputFields.reduce(
          (acc, field) => ({
            ...acc,
            [field.key]: initialData[field.key] || "",
          }),
          {},
        ),
        bulletPoints: initialData.bulletPoints || [],
        lists: config.listFields
          ? config.listFields.reduce(
              (acc, field) => ({
                ...acc,
                [field.key]: initialData[field.key] || [],
              }),
              {},
            )
          : {},
      });
    }
  }, [initialData, config]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 space-y-6 hover:border-blue-400 hover:shadow-blue-200 transition-all duration-300">
      <div className="pb-4 border-b border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700">{config.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {config.hasImage && (
            <ImageUploader
              label="Section Image"
              existingUrl={initialData?.imageUrl || initialData?.logoUrl}
              onChange={(file) => setData((prev) => ({ ...prev, image: file }))}
            />
          )}
          {config.hasBulletPoints && (
            <BulletPoints
              points={data.bulletPoints}
              onChange={(points) =>
                setData((prev) => ({ ...prev, bulletPoints: points }))
              }
            />
          )}
          {config.listFields &&
            config.listFields.map((field) => (
              <ListEditor
                key={field.key}
                label={field.label}
                items={data.lists[field.key] || []}
                placeholder={field.placeholder}
                onChange={(items) =>
                  setData((prev) => ({
                    ...prev,
                    lists: { ...prev.lists, [field.key]: items },
                  }))
                }
              />
            ))}
        </div>

        <div className="space-y-6">
          {config.inputFields.map((field) => (
            <TextInput
              key={field.key}
              label={field.label}
              type={field.type || "text"}
              placeholder={field.placeholder}
              value={data.inputs[field.key] || ""}
              onChange={(value) =>
                setData((prev) => ({
                  ...prev,
                  inputs: { ...prev.inputs, [field.key]: value },
                }))
              }
            />
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 flex justify-end">
        <button
          onClick={() => onSave(data)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200"
        >
          {initialData ? "Update Section" : "Save Section"}
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
