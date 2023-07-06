import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiService";

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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
