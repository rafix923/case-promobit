import React from "react";
import { FilterBoxParagraph, FilterBoxStyled, FilterBoxTitle } from "./style";

export default function FilterBox() {
  return (
    <FilterBoxStyled>
      <FilterBoxTitle>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
      </FilterBoxTitle>
      <FilterBoxParagraph>
        <p>Filtre por:</p>
      </FilterBoxParagraph>
      <div>
        <button></button>
      </div>
    </FilterBoxStyled>
  );
}
