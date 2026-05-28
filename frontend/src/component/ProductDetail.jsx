import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();

  // React.useEffect(() => {
  //   console.log("=== ProductDetail.jsx ===");
  //   console.log("Product from state:", state);
  // }, [state]);

  if (!state) {
    return (
      <div className="main p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <p className="text-gray-500 mt-4">
          Please go back to the product list.
        </p>
      </div>
    );
  }

  const detailsFields = [
    { key: "type", label: "Type" },
    { key: "model", label: "Model" },
    { key: "make", label: "Make" },
    { key: "construction", label: "Construction" },
    { key: "speed", label: "Speed" },
    { key: "weighingRange", label: "Weighing Range" },
    { key: "accuracy", label: "Accuracy" },
    { key: "airRequirement", label: "Air Requirement" },
    {
      key: "approvalFromWeightsMeasures",
      label: "Approval from Weights & Measures",
    },
    { key: "paint", label: "Paint" },
    { key: "loadCell", label: "Load Cell" },
    { key: "pneumatics", label: "Pneumatics" },
    { key: "dischargeGate", label: "Discharge Gate" },
    { key: "display", label: "Display" },
    { key: "controller", label: "Controller" },
    { key: "totalizedAndAutoTare", label: "Totalized & Auto Tare" },
  ];

  return (
    <div className="main flex flex-col gap-10 p-6">
      <div className="w-full h-auto flex flex-col lg:flex-row gap-10 ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={state.imageUrl}
            alt={state.title}
            className="w-full max-w-[600px] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-5">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{state.title}</h2>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h4 className="text-lg text-gray-600">{state.description}</h4>
            <h4>
              <label htmlFor="" className="font-semibold text-xl">
                Features
              </label>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {state.features?.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="font-semibold text-2xl mb-6 text-blue-700">
          Product Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {detailsFields.map((field) => (
                <tr key={field.key} className="border-b border-gray-200">
                  <td className="py-3 font-semibold text-gray-700 w-1/3">
                    {field.label}
                  </td>
                  <td className="py-3 text-gray-600">{state[field.key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
