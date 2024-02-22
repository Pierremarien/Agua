import React from "react";
import { Reference } from "@agua/utils";

interface IList {
  references: Reference[];
}

export const List: React.FC<IList> = ({ references }) => {
  return (
    <ul>
      {references.map(({ title, link }, index) => (
        <li key={index} title={title} className="w-auto py-1 text-2xl md:text-3xl">
          <a href={link} className="opacity-60 hover:opacity-100">
            {title + " >"}
          </a>
        </li>
      ))}
    </ul>
  );
};
