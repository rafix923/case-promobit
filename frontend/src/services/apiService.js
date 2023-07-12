import axios from "axios";
import { BASE_FILMS_URL, KEY_API, BASE_GENRE_FILTER } from "../constants/urls";

export const fetchMovies = async (page, genres) => {
  try {
    let genreQuery = "";
    if (genres.length > 0) {
      genreQuery = `&with_genres=${genres.join(",")}`;
    }
    const response = await axios.get(
      `${BASE_FILMS_URL}/day?api_key=${KEY_API}&page=${page}${genreQuery}&language=pt-BR`
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
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter os detalhes do filme.");
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `${BASE_GENRE_FILTER}list?api_key=${KEY_API}`
    );
    return response.data.genres;
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter os gêneros dos filmes.");
  }
};

export const fetchMovieCertification = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${KEY_API}`
    );
    const results = response.data.results;
    const certification = results.find((item) => item.iso_3166_1 === "BR");
    return certification?.release_dates[0].certification || "N/A";
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter a classificação etária do filme.");
  }
};

export const fetchMovieCrewInfo = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}&language=pt-BR`
    );
    const crew = response.data.crew;
    const characters = response.data.cast.map((actor) => actor.character);
    const director = crew.find((member) => member.job === "Director");
    const writer = crew.find((member) => member.department === "Writing");
    
    return {
      characters,
      director: director?.name || "N/A",
      writer: writer?.name || "N/A"
    };
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter as informações da equipe do filme.");
  }
};
