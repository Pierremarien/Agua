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

import { NavItems, CatItems, SocialItems } from "./staticData";

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

export { fetchProject, fetchProjects, fetchProjectsByGenre, fetchProjectsBySubgenre };


export { NavItems, CatItems, SocialItems };
