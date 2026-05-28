import React from "react";
import styles from "./Testemonial.module.css";
import useFetch from "../services/useFetch";

const url = `${import.meta.env.VITE_API_URL}/public/testimonials`

const Testemonial = () => {
  const { data, loading, error } = useFetch(url);
  const testimonials = data?.data || [];

  React.useEffect(() => {
    console.log("=== Testemonial.jsx ===");
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Testimonials from backend:", testimonials);
  }, [data, loading, error, testimonials]);

  if (loading) {
    return (
      <div className="main p-10 text-center">
        <p>Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main p-10 text-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="heading-div flex flex-col">
        <h2 className="highlight">Testimonials</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      {testimonials.length > 0 && (
        <div className="w-full h-full p-10 overflow-hidden">
          <div className={`w-full h-full ${styles["test-cards"]} `}>
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={item.id || idx}
                className={` w-[300px] h-[350px] flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:scale-105 transition-all duration-500`}
              >
                <div className="w-[300px] h-[250px]  p-2 flex items-center justify-center ">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-auto object-contain object-center"
                    />
                  )}
                </div>
                <div className="w-full h-[100px] flex items-center justify-center  bg-blue-400 p-2">
                  <h1 className="text-xl font-bold text-center">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {testimonials.length === 0 && (
        <p className="text-center py-10 text-gray-500">No testimonials yet.</p>
      )}
    </div>
  );
};

export default Testemonial;
