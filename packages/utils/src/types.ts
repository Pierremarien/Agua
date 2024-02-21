export interface Projet {
  id: number;
  title: string;
  description: string;
  preview: string;
  target: string;
  status_id: number;
  image_projet_id: number[];
  sous_genre_id: number[];
  image_projet_fini: number[];
  termine_description: string;
  reference_id: number[];
  client_id: number;
}

export interface Reference {
  id: number;
  client_id: number;
  title: string;
  description: string;
  link: string;
  category: number;
  date: Date;
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
