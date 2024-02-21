import React from "react";
import { Reference } from "@agua/utils";

interface IList {
  references: Reference[];
}

export const List: React.FC<IList> = ({ references }) => {
  return (
    <ul>
      {references.map(({ title, link }, index) => (
        <li key={index} title={title}>
          <a href={link}>{title}</a>
        </li>
      ))}
    </ul>
  );
};
