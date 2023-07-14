import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecommendations } from "../../services/apiService";

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
      <h2>Recomendações</h2>
      <div>
        {recommendations.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
