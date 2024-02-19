export interface User {
  name: string;
  id: number;
  mail: string;
  password: string;
}
// On a des projets de base commune en structure de donnees 

export interface Projet {
  id: number;
  type: string;
}

export interface Urbanisme {
  id: number;
  type: string;
  title: string;
  description: string;
}
