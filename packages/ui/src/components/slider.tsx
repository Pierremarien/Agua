"use client";

import { Image_projet } from "@agua/utils";
import React, { useState, useEffect } from "react";

interface SliderProps {
  imgs: Image_projet[];
  projectName: string;
}

export const Slider: React.FC<SliderProps> = ({ imgs, projectName }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const nextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  useEffect(() => {
    const delay = 6000;
    const timeoutId = setTimeout(() => {
      setProgressBar(100);
      nextImg();
      setTimeout(() => setProgressBar(0), 50);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [currentImgIndex]);

  console.log(progressBar);

  return (
    <div className="relative w-full">
      <figure className="relative aspect-[4/2]">
        {imgs && (
          <img
            src={imgs[currentImgIndex].url}
            alt={projectName + currentImgIndex}
            className="absolute h-full w-full object-cover"
          />
        )}
        <ul className="absolute right-4 top-4 z-50">
          {imgs.map((index) => (
            <li key={index.id} className="my-2 block h-2 w-2 bg-white" />
          ))}
        </ul>
      </figure>
      <div className="absolute bottom-0 z-50 flex w-full items-center">
        <div className={`progress-bar z-50 h-3 w-full bg-white transition-all md:h-4`}></div>
      </div>
    </div>
  );
};