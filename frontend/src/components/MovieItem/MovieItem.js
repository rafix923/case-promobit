import React from "react";

export default function MovieItem({ movie }) {
  return (
    <div>
      <img
        src={`${BASE_FILM_IMG}/w500/${movie.poster_path}}`}
        alt={movie.title}
        style={{ width: "300px", height: "450px" }}
      />
      <h2>{movie.title}</h2>
    </div>
  );
}
