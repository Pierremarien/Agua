import React from "react";

export const ProjectNav = (props: { prevProj: string; nextProj: string }) => {
  const { prevProj, nextProj } = props;
  return (
    <div className="flex w-full flex-col items-end gap-2 text-2xl md:text-3xl">
      <a href={`/projets/${prevProj}`} className="opacity-60 hover:opacity-100">
        Projet suivant &gt;
      </a>
      <a href={`/projets/${nextProj}`} className="opacity-60 hover:opacity-100">
        &lt; Projet précédent
      </a>
    </div>
  );
};
