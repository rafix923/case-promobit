import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiService";
import { BASE_FILM_IMG } from "../../constants/urls";
import {
  CardOverview,
  DetailsContainer,
  DetailsPageTitle,
  MainContainer,
  TextOverview,
} from "./style";

export default function BoxOverview() {
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
    <>
      <DetailsContainer>
        <CardOverview
          src={`${BASE_FILM_IMG}/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <DetailsPageTitle>{movie.title}</DetailsPageTitle>
        <TextOverview>{movie.overview}</TextOverview>
      </DetailsContainer>
    </>
  );
}
