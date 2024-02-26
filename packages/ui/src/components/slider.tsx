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

  // display a specific image by manual clicking on the little squares
  const handleImgSwitch = (index: number) => {
    setCurrentImgIndex(index);
  };

  useEffect(() => {
    const delay = 10000;
    let animationFrameId: number;
    let startTimestamp: number;

    const animate = (timestamp: number) => {
      if (startTimestamp === undefined) startTimestamp = timestamp; // Init timestamp if not init yet
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / delay); // 1 = 100%
      setProgressBar(progress * 100); // Convert progress to %
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate); // recursive function called until progress = 100%
      } else {
        nextImg();
        startTimestamp = timestamp;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentImgIndex]);

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
            <li
              key={index.id}
              className="z-block my-2 h-2 w-2 cursor-pointer bg-white"
              onClick={() => handleImgSwitch(index.id)}
            />
          ))}
        </ul>
      </figure>
      <div className="absolute bottom-0 z-50 flex w-full items-center">
        <div className={`progress-bar z-50 h-3 bg-white md:h-4`} style={{ width: `${progressBar}%` }}></div>
      </div>
    </div>
  );
};
