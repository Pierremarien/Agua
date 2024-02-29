"use client";
import React, { useState } from "react";
import { CatItems } from "@agua/utils";

export const CategoryMenu = () => {
  const [selectedCat, setSelectedCat] = useState("all");

  const handleCatSwitch = (category: string) => {
    setSelectedCat(category);
  };

  return (
    <ul className="my-4 flex gap-8 font-light">
      {CatItems.map(({ name }, index) => (
        <li key={index}>
          <button
            className="flex items-center gap-2 opacity-75 hover:opacity-100"
            onClick={() => handleCatSwitch(name)}>
            <span className={`block h-2 w-2 ${selectedCat === name ? "bg-white" : ""}`} />
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
