import React from "react";
import ListSectionEditor from "../admin/components/ListSectionEditor";

const OurExpertTeam = () => {
  const config = {
    title: "Team Image",
    hasImage: true,
    hasBulletPoints: false,
    fieldName: "teamMember",
    inputFields: [],
  };

  return (
    <ListSectionEditor
      title="Team Image"
      config={config}
      getEndpoint="/public/our-expert-team"
      postEndpoint="/our-expert-team"
      putEndpoint="/our-expert-team"
      deleteEndpoint="/our-expert-team"
    />
  );
};

export default OurExpertTeam;
