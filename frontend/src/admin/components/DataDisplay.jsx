import React from "react";

const DataDisplay = ({ title, data, config, onEdit, onDelete }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:border-blue-400 hover:shadow-blue-200 transition-all duration-300">
      <h3 className="text-xl font-bold text-blue-700 mb-6 pb-3 border-b border-blue-200">
        Current {title}
      </h3>
      <div className="flex gap-6">
        {config.hasImage && (data.imageUrl || data.logoUrl) && (
          <div className="w-1/5 flex-shrink-0">
            <img
              src={data.imageUrl || data.logoUrl}
              alt={title}
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        )}
        <div
          className={
            config.hasImage && (data.imageUrl || data.logoUrl)
              ? "w-4/5"
              : "w-full"
          }
        >
          <div className="space-y-4 mb-6">
            {config.inputFields.map((field) => (
              <div key={field.key}>
                <span className="font-semibold text-blue-700 block mb-1">
                  {field.label}:
                </span>
                <span className="text-gray-700 break-all">
                  {data[field.key]}
                </span>
              </div>
            ))}
          </div>
          {config.listFields &&
            config.listFields.map(
              (field) =>
                data[field.key]?.length > 0 && (
                  <div key={field.key} className="mb-6">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      {field.label}:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {data[field.key].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          {config.hasBulletPoints && data.bulletPoints?.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">
                Bullet Points:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {data.bulletPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
