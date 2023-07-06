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
