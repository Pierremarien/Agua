import React from "react";

interface IProjectCard {
  preview: string;
  img: string;
  client: string;
  title: string;
  className: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({ preview, img, client, title, className }) => {
  if (!preview || !img || !client || !title || !className) {
    return null;
  }

  return (
    <div className={className + " relative"}>
      <img src={img} alt={title} className="absolute h-full w-full" />
      <h3>{title}</h3>
      <span className="block">{client}</span>
      <p>{preview}</p>
    </div>
  );
};
