import React from "react";
import ListSectionEditor from "../admin/components/ListSectionEditor";

const Caurosel = () => {
  const config = {
    title: "Carousel Slide",
    hasImage: true,
    hasBulletPoints: false,
    fieldName: "carousel",
    inputFields: [
      { key: "title", label: "Slide Title", placeholder: "Enter slide title" },
      { key: "subtext", label: "Slide Subtext", placeholder: "Enter slide subtext" },
      {
        key: "description",
        label: "Slide Description",
        type: "textarea",
        placeholder: "Enter slide description",
      },
    ],
  };

  return (
    <ListSectionEditor
      title="Carousel Slide"
      config={config}
      getEndpoint="/public/carousel"
      postEndpoint="/carousel"
      putEndpoint="/carousel"
      deleteEndpoint="/carousel"
    />
  );
};

export default Caurosel;
