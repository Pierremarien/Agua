"use client";
import React, { useState } from "react";
import { CatItems } from "@agua/utils";

export const CategoryMenu = () => {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [selectedSubCat, setSelectedSubCat] = useState("Tous");

  const handleCatSwitch = (category: string) => {
    setSelectedCat(category);
  };

  const handleSubCatSwitch = (subCategory: string) => {
    setSelectedSubCat(subCategory);
  };

  return (
    <ul className="my-4 flex gap-8 font-light">
      {CatItems.map((catItem, index) => (
        <li key={index}>
          <button
            className={`flex items-center gap-2 hover:opacity-100 ${
              selectedCat === catItem.name ? "opacity-100" : "opacity-75"
            }`}
            onClick={() => handleCatSwitch(catItem.name)}>
            <span className={`block h-2 w-2 ${selectedCat === catItem.name ? "bg-white" : ""}`} />
            {catItem.name}
          </button>
          {selectedCat === catItem.name && (
            <ul>
              {catItem.subCat.map((subCatItem: string, subIndex: number) => (
                <li key={subIndex} className="ml-4" onClick={() => handleSubCatSwitch(subCatItem)}>
                  <span
                    className={`cursor-pointer hover:opacity-100 ${
                      selectedSubCat === subCatItem ? "opacity-100" : "opacity-60"
                    }`}>
                    {subCatItem}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
