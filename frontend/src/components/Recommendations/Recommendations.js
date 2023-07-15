import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecommendations } from "../../services/apiService";
import { BASE_FILM_IMG } from "../../constants/urls";
import {
  MovieTitle,
  RealeaseDate,
  RelatedMoviesContainer,
  RelatedMoviesImage,
  SectionTitle,
} from "./style";

export default function Recommendations() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const fetchedRecommendations = await fetchRecommendations(id);
        setRecommendations(fetchedRecommendations);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getRecommendations();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <SectionTitle>Recomendações</SectionTitle>
      <RelatedMoviesContainer>
        {recommendations.map((movie) => (
          <div key={movie.id}>
            <RelatedMoviesImage
              src={`${BASE_FILM_IMG}/original${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <RealeaseDate>{movie.release_date}</RealeaseDate>
          </div>
        ))}
      </RelatedMoviesContainer>
    </section>
  );
}
