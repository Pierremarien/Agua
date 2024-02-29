import React, { useState } from "react";
import { Reference, Client } from "@agua/utils";

interface IList {
  references: Reference[];
  hideChevron: boolean;
  clients: Client[];
}

export const List: React.FC<IList> = ({ references, hideChevron, clients }) => {
  return (
    <ul>
      {clients.map(({ name, id }) => (
        <li key={id} title={name} className="group flex gap-4 py-2 text-3xl md:text-4xl">
          <span className="opacity-60 hover:opacity-100 group-hover:opacity-100">{name + " >"}</span>
          {references && (
            <ul className="hidden group-hover:block">
              {references.map(({ title, link }, index) => (
                <li key={index} title={title} className="w-auto py-1 text-2xl md:text-3xl">
                  <a href={link} className="opacity-60 hover:opacity-100">
                    {!hideChevron ? title + " >" : title}
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
