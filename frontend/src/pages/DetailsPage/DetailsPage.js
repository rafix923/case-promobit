import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiService";
import Header from "../../components/Header/Header";
import { BASE_FILM_IMG } from "../../constants/urls";
import { MainContainer } from "./style";


export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const fetchedMovie = await fetchMovieDetails(id);
        setMovie(fetchedMovie);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <MainContainer>
      <Header />
      <img
        src={`${BASE_FILM_IMG}/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "23rem" }}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </MainContainer>
  );
}
