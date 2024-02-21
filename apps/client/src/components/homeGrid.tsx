import React from "react";
import { Card } from "@agua/ui";
import type { Company } from "@agua/utils";

export const HomeGrid: React.FC<Company> = ({ name }) => {
  const links = [
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
      <h1 className="absolute flex h-full w-full items-center justify-center text-[clamp(8rem,28vw,32rem)]">{name}</h1>
      {links.map(({ title, href }, index) => (
        <Card href={href} key={title} title={title} className={cardGridPositions(index)} />
      ))}
    </div>
  );
};
