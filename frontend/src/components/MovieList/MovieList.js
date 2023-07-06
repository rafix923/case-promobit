import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/apiService";
import MovieItem from "../MovieItem/MovieItem";
import ReactPaginate from "react-paginate";

const MovieList = () => {

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

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  return (
    <div>
      {/* Retorna a lista de filmes */}
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}

      <ReactPaginate
        pageCount={totalPages}
        initialPage={currentPage - 1}
        forcePage={currentPage - 1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={null}
        nextLabel={"Próxima"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </div>
  );
};

export default MovieList;
