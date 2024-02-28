"use client";
import React, { useState } from "react";

import { NavItems } from "@agua/utils";

export const Menu = (props: { home: boolean }) => {
  const { home } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen && <div className="fixed z-40 h-full w-screen" onClick={handleMenuOpen} />}
      <button
        className={
          home
            ? "hidden"
            : "fixed right-2 z-50 m-4 ml-auto flex items-center gap-4 rounded-lg bg-[#595353]/30 px-4 py-2 shadow-[0_3px_30px_rgb(0,0,0,0.2)] backdrop-blur-sm hover:bg-[#595353]/60"
        }
        onClick={handleMenuOpen}>
        {!menuOpen && (
          <span className="flex items-center gap-2">
            Menu <img src="/menu.svg" className="h-5 w-5" />
          </span>
        )}
        <ul className={menuOpen ? "flex flex-col items-start" : "hidden"}>
          {NavItems.map(({ name, href }, index) => (
            <li key={index} className="py-2 opacity-60 hover:opacity-100">
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </button>
    </>
  );
};
