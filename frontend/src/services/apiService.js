import axios from "axios";
import {
  BASE_FILMS_URL,
  KEY_API,
  BASE_GENRE_FILTER,
  BASE_CASTING_IMG,
} from "../constants/urls";

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
      `${BASE_GENRE_FILTER}list?api_key=${KEY_API}&language=pt-BR`
    );
    return response.data.genres;
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter os gêneros dos filmes.");
  }
};

export const fetchMovieCertification = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${KEY_API}&language=pt-BR`
    );
    const results = response.data.results;
    const certification = results.find((item) => item.iso_3166_1 === "BR");
    return certification?.release_dates[0].certification || "N/A";
  } catch (error) {
    throw new Error(
      "Desculpe. Não foi possível obter a classificação etária do filme."
    );
  }
};

export const fetchMovieCrewInfo = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}`
    );
    const crew = response.data.crew;
    const filteredCrew = [];

    crew.forEach((member) => {
      if (member.job === "Screenplay" || member.job === "Director") {
        filteredCrew.push({ name: member.name, job: member.job });
      }
    });

    return filteredCrew;
  } catch (error) {
    throw new Error(
      "Desculpe. Não foi possível obter as informações da equipe do filme."
    );
  }
};

export const fetchOriginalCast = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_CASTING_IMG}${id}/credits?api_key=${KEY_API}`
    );
    const cast = response.data.cast;
    const originalCast = cast
      .filter((member) => member.order < 16)
      .map((member) => ({
        name: member.name,
        character: member.character,
        profile_path: member.profile_path,
      }));
    return originalCast;
  } catch (error) {
    throw new Error(
      "Desculpe. Não foi possível obter as informações do elenco original."
    );
  }
};

export const fetchMovieTrailer = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY_API}&language=pt-BR`
    );
    const videos = response.data.results;
    const trailer = videos.find((video) => video.type === "Trailer");
    if (trailer) {
      const videoId = trailer.key;
      return `https://www.youtube.com/watch?v=${videoId}`;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Desculpe. Não foi possível obter o trailer do filme.");
  }
};

export const fetchRecommendations = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_CASTING_IMG}${id}/recommendations?api_key=${KEY_API}&language=pt-BR&page=1`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(
      "Desculpe. Não foi possível obter as recomendações de filmes."
    );
  }
};
