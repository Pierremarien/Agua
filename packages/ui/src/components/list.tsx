import React, { useState } from "react";
import { Reference, Client } from "@agua/utils";

interface IList {
  references: Reference[];
  isLarge: boolean;
  clients: Client[];
}

export const List: React.FC<IList> = ({ references, isLarge, clients }) => {
  return (
    <ul>
      {clients.map(({ name, id }) => (
        <li key={id} title={name} className="text-2xl">
          {name + " >"}
          {references && (
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
          )}
        </li>
      ))}
    </ul>
  );
};
