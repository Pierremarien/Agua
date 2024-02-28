import React, { useState } from "react";
import { Reference } from "@agua/utils";

interface IList {
  references: Reference[];
  isLarge: boolean;
}

export const List: React.FC<IList> = ({ references, isLarge }) => {
  return (
    <ul>
      {references.map(({ title, link }, index) => (
        <li
          key={index}
          title={title}
          className={isLarge ? "w-auto py-1 text-3xl md:text-5xl" : "w-auto py-1 text-2xl md:text-3xl"}>
          <a href={link} className="opacity-60 hover:opacity-100">
            {title + " >"}
          </a>
        </li>
      ))}
    </ul>
  );
};
