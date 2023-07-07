import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { FilterBoxParagraph, FilterBoxStyled, FilterBoxTitle } from "./style";
import MovieGenre from "../MovieGenre/MovieGenre";

export default function FilterBox() {
  const { genres, filters, handleFilterGenres } = useContext(MovieContext);
  return (
    <FilterBoxStyled>
      <FilterBoxTitle>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
      </FilterBoxTitle>
      <FilterBoxParagraph>
        <h2>Filtre por:</h2>
      </FilterBoxParagraph>
      {genres &&
        genres.map((genre) => {
          <MovieGenre
            key={genre.id}
            name={genre.name}
            onClick={() => handleFilterGenres(genre.id)}
            active={filters.includes(genre.id)}
          />;
        })}
    </FilterBoxStyled>
  );
}
