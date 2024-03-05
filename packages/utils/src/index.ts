import {
  Projet,
  Reference,
  Company,
  Membre,
  Sous_genre,
  User,
  Genre,
  Image_projet,
  Image_projet_fini,
  NavItem,
  Client,
} from "./types";

import { NavItems } from "./staticData";

import { fetchProject, fetchProjects, fetchProjectsByGenre, fetchProjectsBySubgenre } from "./fetchData";

export type {
  Projet,
  Reference,
  Company,
  Membre,
  Sous_genre,
  User,
  Genre,
  Image_projet,
  Image_projet_fini,
  NavItem,
  Client,
};
export { NavItems };

export { fetchProject, fetchProjects, fetchProjectsByGenre, fetchProjectsBySubgenre };


