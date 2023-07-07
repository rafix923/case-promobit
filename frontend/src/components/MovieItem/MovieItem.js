import React from "react";
import { BASE_FILM_IMG } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

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
        style={{ width: "300px", height: "450px" }}
      />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  );
}
