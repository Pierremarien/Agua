import React from "react";

interface IProjectCard {
  preview: string;
  img: any[];
  client: string;
  title: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({ preview, img, client, title }) => {
  return <div>ProjectCard</div>;
};
