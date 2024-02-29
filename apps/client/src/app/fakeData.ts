import { Reference, Projet, Company, Image_projet, Client } from "@agua/utils";

export const referencesData: Reference[] = [
  { title: "Reference 1", link: "/ex5" },
  { title: "Reference 2", link: "/ex4" },
  { title: "Reference 3", link: "/ex3" },
];

export const projectData: Projet = {
  id: 1,
  preview: "blglle",
  sous_genre_id: [12, 12, 12],
  title: "Botassart, Tombeau du Géant",
  description:
    "Dans une région dominée par de profondes vallées, et percée de rivières, tout en méandres, et aux coteaux tapissés de forêts denses, le point de vue de Botassart présente aux visiteurs, un concentré visuel impressionnant sur le Tombeau du Géant. En valorisant, voire en sublimant ce paysage, on engendre chez le passant une émotion particulière qui restera dans sa mémoire. Pour créer cette émotion, il faut que la zone d’accueil soit à la hauteur de la qualité du paysage, et renforce cette impression de dignité paisible que l’on y perçoit.",
  target: "Valorisation touristique",
  status_id: 1,
  image_projet_id: [12, 23, 23],
  image_projet_fini: [12, 24],
  client_id: 456,
  termine_description: "Sample termination description...",
  reference_id: [789, 232],
};

export const companyData: Company = {
  id: 0,
  name: "agua",
  address: "ntm",
  locality: "ntm",
  fax: "ddd",
  email: "ntm",
  phone: "ntm",
  about_team: "ntm",
  about_company: "ntm",
  about_references: "ntm",
  image: "ntm",
  logo: "ntm",
};

export const imgProjetData: Image_projet[] = [
  { id: 0, url: "/tombeau1.jpeg", description: "tombeau du géant" },
  { id: 1, url: "/tombeau2.jpeg", description: "tombeau du géant" },
];

export const clientData: Client[] = [
  { id: 0, name: "Ma bite" },
  { id: 1, name: "Mon cul" },
  { id: 2, name: "Mes couilles" },
];
