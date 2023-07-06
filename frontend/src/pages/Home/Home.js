import React from "react";
import Header from "../../components/Header/Header";
import FilterBox from "../../components/FilterBox/FilterBox";
import MovieList from "../../components/MovieList/MovieList";

export default function Home() {
  return (
    <div>
      <Header />
      <FilterBox />
      <MovieList />
    </div>
  );
}
