import React from "react";
import { referencesData, projectData } from "../../fakeData";
import { List, Title, Textblock } from "@agua/ui";

const Projet = () => {
  const { title, target, description } = projectData;
  return (
    <div className="px-4 py-8">
      {projectData && (
        <>
          <Title title={title} lg={true} />
          <Title title={target} lg={false} />
          <Textblock content={description} left={true} />
          <Title title="Médias" lg={false} />
          <List references={referencesData} />
        </>
      )}
    </div>
  );
};

export default Projet;
