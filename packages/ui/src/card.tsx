import * as React from "react";

export function Card({ title, href, className }: { title: string; href: string; className: string }): JSX.Element {
  return (
    <a
      className={`z-20 flex h-full w-full items-end rounded-lg bg-[#595353]/30 shadow-[0_3px_30px_rgb(0,0,0,0.2)] backdrop-blur-sm hover:bg-[#595353]/50 ${className}`}
      href={`${href}`}>
      <h2 className="p-2 text-xl">{title}</h2>
    </a>
  );
}
