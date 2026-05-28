import React from "react";

const BulletPoints = ({ points, onChange }) => {
  const add = () => onChange([...points, ""]);
  const remove = (index) => onChange(points.filter((_, i) => i !== index));
  const update = (index, value) => {
    const newPoints = [...points];
    newPoints[index] = value;
    onChange(newPoints);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-blue-700">Bullet Points</label>
        <button onClick={add} className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg">
          + Add
        </button>
      </div>
      {points.map((p, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            value={p}
            onChange={(e) => update(i, e.target.value)}
            placeholder={`Point ${i + 1}`}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={() => remove(i)} className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default BulletPoints;
