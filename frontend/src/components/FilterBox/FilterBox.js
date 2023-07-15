import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import {
  Buttons,
  ButtonsContainer,
  FilterBoxParagraph,
  FilterBoxStyled,
  FilterBoxTitle,
} from "./style";
import MovieGenre from "../MovieGenre/MovieGenre";
import { fetchMovies } from "../../services/apiService";

export default function FilterBox() {
  const {
    genres,
    filters,
    handleFilterGenres,
    setCurrentPage,
    setMovies,
    setError,
  } = useContext(MovieContext);

  const handleGenreClick = async (genreId) => {
    setCurrentPage(1);
    handleFilterGenres(genreId);
    try {
      const movies = await fetchMovies(1, filters);
      setMovies(movies);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <FilterBoxStyled>
       <FilterBoxTitle>
          <h1>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h1>
        </FilterBoxTitle>
        <FilterBoxParagraph>
          <h2>Filtre por:</h2>
        </FilterBoxParagraph>
        <ButtonsContainer>
          <Buttons>
            {genres &&
              genres.map((genre) => (
                <MovieGenre
                  key={genre.id}
                  name={genre.name}
                  onClick={() => handleGenreClick(genre.id)}
                  active={filters.includes(genre.id)}
                />
              ))}
          </Buttons>
        </ButtonsContainer>
    </FilterBoxStyled>
  );
}
