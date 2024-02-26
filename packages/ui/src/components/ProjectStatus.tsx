import React from "react";

export const ProjectStatus = (props: { client: string; finished: boolean }) => {
  const { client, finished } = props;
  return (
    <div className="my-2 flex justify-end gap-2">
      <span>{client}</span>
      <span>|</span>
      <div className="flex items-center gap-1">
        <span className={finished ? "block h-2 w-2 bg-green-400" : "block h-2 w-2 bg-yellow-400"} />
        <span>{finished ? "Terminé" : "En Chantier"}</span>
      </div>
    </div>
  );
};
