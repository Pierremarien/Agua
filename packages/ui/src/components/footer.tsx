import * as React from "react";
import { NavItems, SocialItems } from "@agua/utils";

interface IFooter {
  home: boolean;
  address: string;
  phone: string;
  email: string;
  locality: string;
  name: string;
}

export const Footer: React.FC<IFooter> = (props) => {
  const { home, address, phone, email, locality, name } = props;

  return (
    <footer className={`w-full justify-between px-8 md:gap-8 md:px-16 ${home ? "hidden" : "md:flex"}`}>
      {name && (
        <div>
          <h2 className="flex h-44 w-44 items-end  justify-center bg-[#231F20] p-4 text-6xl">{name}</h2>
        </div>
      )}
      {props && (
        <div className="space-y-8 text-2xl">
          <div className="py-4 md:py-0">
            <span className="block">{address}</span>
            <span className="block"> {locality}</span>
          </div>
          <div>
            <a href={`tel:${phone}`} className="block underline underline-offset-2">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="block underline underline-offset-2">
              {email}
            </a>
          </div>
        </div>
      )}

      {NavItems && (
        <ul className="space-y-4 py-8 md:py-0">
          {NavItems.map(({ name, href }, index) => (
            <li key={index}>
              <a href={href} className="font-light opacity-60 hover:opacity-100">
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {SocialItems && (
        <ul className="space-y-4 py-8 md:py-0">
          {SocialItems.map((SocialItem, index) => (
            <li key={index}>
              <a href={SocialItem.href} className="font-light opacity-60 hover:opacity-100">
                {SocialItem.name}
              </a>
            </li>
          ))}
          <li className="pt-12 font-light  opacity-60 md:pt-24">© 2024 Bibou Team.</li>
        </ul>
      )}
    </footer>
  );
};
