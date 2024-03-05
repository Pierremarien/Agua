import { apiBuilder } from "./apiBuilder";

/**
 * Fetches projects from the server of any genre
 * @param page page number for pagination
 */
export const fetchProjects = async (page: number) => {
  const response = await fetch(apiBuilder.buildUrl(`projects?page=${page}`));
  return response.json();
}

/**
 * Fetches a project from the server by its id
 * @param id id of the project
 */
export const fetchProject = async (id: string) => {
  const response = await fetch(apiBuilder.buildUrl(`projects/${id}`));
  return response.json();
}

/**
 * Fetches projects from the server of a specific genre
 * @param genreId id of the genre
 * @param page page number for pagination
 */
export const fetchProjectsByGenre = async (genreId: number, page: number) => {
  const response = await fetch(apiBuilder.buildUrl(`projects/genre/${genreId}?page=${page}`));
  return response.json();
}

/**
 * Fetches projects from the server of a specific subgenre
 * @param subgenreId id of the subgenre
 * @param page page number for pagination
 */
export const fetchProjectsBySubgenre = async (subgenreId: number, page: number) => {
  const response = await fetch(apiBuilder.buildUrl(`projects/subgenre/${subgenreId}?page=${page}`));
  return response.json();
}

