import React from "react";
import { Card } from "@agua/ui";

export const HomeGrid = () => {
  // REPLACE THIS WITH SERVER RESPONSE
  const LINKS = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projets",
      href: "/projets",
    },
    {
      title: "Références",
      href: "/references",
    },
    {
      title: "À propos",
      href: "/a-propos",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  // End of Replacement //

  const cardGridPositions = (index: number): string => {
    switch (index) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-span-3 row-span-2 col-start-3";
      case 2:
        return "col-span-3 row-span-2 row-start-3";
      case 3:
        return "col-span-2 col-start-4 row-start-3";
      case 4:
        return "col-span-2 col-start-4 row-start-4";
      default:
        return "";
    }
  };
  return (
    <div className="relative grid h-screen grid-cols-5 grid-rows-4 gap-4 p-4">
      {/*       <h1>{companyName}</h1> */}
      {LINKS.map(({ title, href }, index) => (
        <Card href={href} key={title} title={title} className={cardGridPositions(index)} />
      ))}
    </div>
  );
};
