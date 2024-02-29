import * as React from "react";
import { NavItems } from "@agua/utils";

export function Footer(props: { home: boolean }): JSX.Element {
  const { home } = props;

  return (
    <footer className={`${home ? "hidden" : "absolute bottom-0"}`}>
      {NavItems && (
        <ul>
          {NavItems.map(({ name, href }, index) => (
            <li key={index}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
}
