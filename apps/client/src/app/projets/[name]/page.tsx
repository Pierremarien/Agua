import React from "react";
import { referencesData, projectData, imgProjetData } from "../../fakeData";
import { List, Title, Textblock, Slider, ProjectNav } from "@agua/ui";

const Projet = () => {
  const { title, target, description } = projectData;
  return (
    <div className="px-4 py-8">
      {projectData && (
        <>
          <Title title={title} lg={true} />
          <Slider imgs={imgProjetData} projectName={title} />
          <Title title={target} lg={false} />
          <Textblock content={description} left={true} />
          <Title title="Médias" lg={false} />
          <List references={referencesData} />
          <ProjectNav nextProj="/next" prevProj="/prev" />
        </>
      )}
    </div>
  );
};

export default Projet;
