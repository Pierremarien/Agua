export interface Projet {
  id: number | null;
  title: string;
  description: string;
  preview: string | null;
  target: string;
  status_id: number | null;
  image_projet_id: number[] | null;
  sous_genre_id: number[] | null;
  image_projet_fini: number[] | null;
  termine_description: string | null;
  reference_id: number[] | null;
  client_id: number | null;
}

export interface Reference {
  id?: number;
  client_id?: number;
  title?: string;
  description?: string;
  link?: string;
  category?: number;
  date?: Date;
}

export interface Membre {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  image: string;
  description: string;
  cv: string;
}

export interface Company {
  id: number;
  name: string;
  address: string;
  locality: string;
  email: string;
  phone: string;
  about_team: string;
  about_company: string;
  about_references: string;
  image: string;
  logo: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  admin: boolean;
  moderator: boolean;
}

export interface Image_projet {
  id: number;
  url: string;
  description: string;
}

export interface Image_projet_fini {
  id: number;
  url: string;
  description: string;
}

export interface Sous_genre {
  id: number;
  name: string;
  genre_id: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Client {
  id: number;
  name: string;
  mail?: string;
  phone?: number;
}
