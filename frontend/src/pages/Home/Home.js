import React from "react";
import Header from "../../components/Header/Header";
import FilterBox from "../../components/FilterBox/FilterBox";
import MovieList from "../../components/MovieList/MovieList";
import { MovieDataProvider } from "../../contexts/MovieContext";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <MovieDataProvider>
      <HomeContainer>
        <Header />
        <FilterBox />
        <MovieList />
      </HomeContainer>
    </MovieDataProvider>
  );
}
