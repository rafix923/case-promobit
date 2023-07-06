import axios from "axios";
import { BASE_FILMS_URL, KEY_API } from "../constants/urls";

export const fetchMovies = async (page) => {
  try {
    const response = await axios.get(
      `${BASE_FILMS_URL}/day?api_key=${KEY_API}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(
      "Desculpe. Houve uma falha desconhecida no carregamento dos filmes."
    );
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter os detalhes do filme.");
  }
};
