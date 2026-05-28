import React from "react";
import ListSectionEditor from "../admin/components/ListSectionEditor";

const Testimonials = () => {
  const config = {
    title: "Testimonial",
    hasImage: true,
    hasBulletPoints: false,
    fieldName: "testimonial",
    inputFields: [
      {
        key: "title",
        label: "Client Name / Title",
        placeholder: "Enter client name or title",
      },
    ],
  };

  return (
    <ListSectionEditor
      title="Testimonial"
      config={config}
      getEndpoint="/public/testimonials"
      postEndpoint="/testimonials"
      putEndpoint="/testimonials"
      deleteEndpoint="/testimonials"
    />
  );
};

export default Testimonials;
