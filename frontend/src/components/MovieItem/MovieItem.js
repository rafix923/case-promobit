import React from "react";
import { BASE_FILM_IMG } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { MovieRealese, MovieTitle } from "./style";

export default function MovieItem({ movie }) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleItemClick}>
      <img
        src={`${BASE_FILM_IMG}/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "12rem" }}
      />
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieRealese>{movie.release_date}</MovieRealese>
    </div>
  );
}
