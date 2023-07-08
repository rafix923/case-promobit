import React from "react";
import Header from "../../components/Header/Header";
import FilterBox from "../../components/FilterBox/FilterBox";
import MovieList from "../../components/MovieList/MovieList";
import { MovieDataProvider } from "../../contexts/MovieContext";

export default function Home() {
  return (
    <MovieDataProvider>
      <Header />
      <FilterBox />
      <MovieList />
    </MovieDataProvider>
  );
}
