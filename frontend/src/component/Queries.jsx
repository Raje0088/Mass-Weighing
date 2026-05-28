import React, { useState } from "react";
import { apiPost } from "../services/api";

const Queries = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await apiPost("/public/query", formData);
      if (response.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Error submitting query: " + response.error);
      }
    } catch (err) {
      alert("Error submitting query: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main bg-blue-50 p-10">
      <div className="heading-div text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          We'd love to help you
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="w-full grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center p-10">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-10 py-3 rounded-lg font-semibold transition duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
        {success && (
          <div className="text-center text-green-600 font-semibold">
            Query submitted successfully! We'll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default Queries;
