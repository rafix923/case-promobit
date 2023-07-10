import React, { useEffect, useContext } from "react";
import { fetchMovies } from "../../services/apiService";
import MovieItem from "../MovieItem/MovieItem";
import ReactPaginate from "react-paginate";
import { MovieContext } from "../../contexts/MovieContext";
import { CardsContainer, PaginateStyled } from "./style";
import next from "../../assets/next.png";
const MovieList = () => {
  const {
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    filters,
  } = useContext(MovieContext);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies(currentPage, filters);
        setMovies(fetchedMovies);
        setTotalPages(5);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getMovies();
  }, [currentPage, setMovies, setLoading, setError, setTotalPages, filters]);

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
    <>
      <CardsContainer>
        {/* Retorna a lista de filmes */}
        {movies &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </CardsContainer>
      <PaginateStyled>
        <ReactPaginate
          pageCount={totalPages}
          initialPage={currentPage - 1}
          forcePage={currentPage - 1}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={null}
          nextLabel={<img src={next} alt="Next page arrow icon" />}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={setTotalPages}
        />
      </PaginateStyled>
    </>
  );
};

export default MovieList;
