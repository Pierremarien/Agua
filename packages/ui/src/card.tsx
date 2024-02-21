import * as React from "react";

export function Card({ title, href, className }: { title: string; href: string; className: string }): JSX.Element {
  return (
    <a
      className={`block h-full w-full rounded-lg bg-white opacity-25 ${className}`}
      href={`/${href}`}
      rel="noopener noreferrer"
      target="_blank">
      <h2 className="bottom-2 left-2 z-10 text-xl font-semibold text-black">{title}</h2>
    </a>
  );
}
