import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/apiService";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies(currentPage);
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getMovies();
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Retorna a lista de filmes */}
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <button
        type="button"
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      >
        Próxima Página
      </button>
    </div>
  );
};

export default MovieList;
