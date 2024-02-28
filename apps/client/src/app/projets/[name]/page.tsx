import React from "react";
import { referencesData, projectData, imgProjetData } from "../../fakeData";
import { List, Title, Textblock, Slider, ProjectNav, ProjectStatus } from "@agua/ui";

const Projet = () => {
  const { title, target, description } = projectData;
  return (
    <main className="px-4 py-8">
      {projectData && (
        <section className="mt-8 space-y-4">
          <Title title={title} lg={true} />
          <ProjectStatus client="Botassart" finished={false} />
          <Slider imgs={imgProjetData} projectName={title} />
          <div className="space-y-4 py-4">
            <Title title={target} lg={false} />
            <Textblock content={description} left={true} />
          </div>
          <div className="space-y-4 py-4">
            <Title title="Médias" lg={false} />
            <List references={referencesData} isLarge={false} />
          </div>
          <ProjectNav nextProj="/next" prevProj="/prev" />
        </section>
      )}
    </main>
  );
};

export default Projet;
