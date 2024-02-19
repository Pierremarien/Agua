export interface Project {
  id: string;
  type: "urbanisme" | "amenagement" | "architecture";
  title: string;
  description: string;
  master: string;
  status: string;
  references: string[];
  target: string;
  images: string[];
  extendedDescription: string;
  date: Date;
}

export interface News {
  id: string;
  title: string;
  description: string;
  date: Date;
  images: string[];
  linkedProject: string;
}

export interface Reference {
  id: string;
  title: string;
  description: string;
  images: string[];
  linkedProject: string;
  type: "public" | "private" | "press";
}

export interface Contact {
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
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  description: string;
  image: string;
  logo: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "user" | "visitor";
}

export interface Architecture {
  type: "publique" | "privé";
}

export interface Urbanisme {
  type: "faisabilité" | "tourisme";
}

export interface Amenagement {
  type: "abords" | "parc" | "place" | "equipment";
}
