import { NavItem } from ".";

export const NavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projets", href: "/projets" },
  { name: "Références", href: "/references" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export const CatItems: any[] = [
  { name: "Urbanisme", subCat: ["Tous", "Faisabilité", "Tourisme"] },
  { name: "Aménagements", subCat: ["Tous", "Abords", "Parc"] },
  { name: "Architecture", subCat: ["Tous", "Abords", "Parc"] },
  { name: "Tous", subCat: ["Tous", "Abords", "Parc"] },
];

export const SocialItems: any[] = [
  { name: "Facebook", href: "/" },
  { name: "Instagram", href: "/" },
  { name: "Youtube", href: "/" },
  { name: "Linkedin", href: "/" },
];
