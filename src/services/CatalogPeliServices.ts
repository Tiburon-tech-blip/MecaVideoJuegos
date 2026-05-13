import axios from "axios";

import type { ItemCatalogoResponse } from "../types/catalogoResonse";
import type { ItemCatalogo } from "../types/catalogo";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const getPeliculas = async (titulo: string): Promise<ItemCatalogo[]> => {

  try {

    const response = await axios.get<ItemCatalogoResponse>(
      "https://www.omdbapi.com/",
      {
        params: {
          s: titulo,
          apikey: API_KEY,
        },
      }
    );

    const datos = response.data;

    // Si no encuentra resultados
    if (datos.Response === "False") {
      return [];
    }

    
    return datos.Search.map((peli) => ({

      Title: peli.Title,
      Year: peli.Year,
      imdbID: peli.imdbID,
      Type: peli.Type,
      Poster: peli.Poster,

    }));

  } catch (error) {

    console.error("Error obteniendo películas:", error);

    return [];
  }
};