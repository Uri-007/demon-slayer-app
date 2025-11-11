import axios from "axios";

const API = axios.create({
  baseURL: "/api/v1", // usa el proxy de Vite para evitar CORS
});

export async function fetchCharacters(page = 1) {
  try {
    const response = await API.get(`/characters?page=${page}`);
    // La API devuelve: { pagination, content }
    return response.data;
  } catch (error) {
    console.error("Error al cargar personajes:", error);
    throw error;
  }
}

export default { fetchCharacters };
