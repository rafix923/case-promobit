import React, { useEffect, useContext, useState } from "react";
import { fetchMovies } from "../../services/apiService";
import MovieItem from "../MovieItem/MovieItem";
import ReactPaginate from "react-paginate";
import { MovieContext } from "../../contexts/MovieContext";
import { CardsContainer, LastPage, PaginateStyled } from "./style";
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

  const [isLastPageClicked, setIsLastPageClicked] = useState(false);

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

  useEffect(() => {
    if (isLastPageClicked) {
      setCurrentPage(totalPages);
      setIsLastPageClicked(false);
    }
  }, [isLastPageClicked, setCurrentPage, totalPages]);

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  const handleLastPageClick = () => {
    setIsLastPageClicked(true);
  };

  const lastPage = "Última";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          onPageChange={
            isLastPageClicked ? handleLastPageClick : handlePageChange
          }
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={null}
          nextLabel={<img src={next} alt="Next page arrow icon" />}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={setTotalPages}
        />
      </PaginateStyled>
      <LastPage onClick={handleLastPageClick}>{lastPage}</LastPage>
    </>
  );
};

export default MovieList;
