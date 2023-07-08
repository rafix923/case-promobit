import React, { createContext, useState, useEffect } from "react";
import { fetchGenres } from "../services/apiService";

export const MovieContext = createContext();

export const MovieDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [filters, setFilters] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const fetchedGenres = await fetchGenres();
        setGenres(fetchedGenres);
      } catch (error) {
        setError(error);
      }
    };

    getGenres();
  }, []);

  const handleFilterGenres = (genreId) => {
    if (filters.includes(genreId)) {
      setFilters(filters.filter((id) => id !== genreId));
    } else {
      setFilters([...filters, genreId]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
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
        handleFilterGenres,
        genres,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
