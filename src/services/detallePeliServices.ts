import axios from "axios";
import type { DetallePelicula } from "../types/detallePeliId";
import type { DetallePeliculaResponse } from "../types/detallePeliResonseId";
// URL base de la API
const API_URL = "https://www.omdbapi.com/";

// Tu API KEY de OMDb
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Obtener detalle completo de una película por ID
export const getDetallePelicula = async (
  imdbID: string
): Promise<DetallePelicula | null> => {

  try {

    const respuesta = await axios.get<DetallePeliculaResponse>(API_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
        plot: "full",
      },
    });

    const data = respuesta.data;
    //console.log(data);

    if (data.Response === "False") {
      return null;
    }

    
    const pelicula = {

      Title: data.Title,
      Year: data.Year,
      Rated: data.Rated,
      Released: data.Released,
      Runtime: data.Runtime,
      Genre: data.Genre,
      Director: data.Director,
      Actors: data.Actors,
      Plot: data.Plot,
      Language: data.Language,
      Country: data.Country,
      Awards: data.Awards,
      Poster: data.Poster,
      imdbID: data.imdbID,
    };

    console.log(pelicula);

    return pelicula;

  } catch (error) {

    console.error("Error obteniendo detalle:", error);

    return null;
  }
};