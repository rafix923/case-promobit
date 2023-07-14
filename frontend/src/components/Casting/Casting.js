import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOriginalCast } from "../../services/apiService";
import { BASE_FILM_IMG } from "../../constants/urls";

export default function Casting() {
  const { id } = useParams();
  const [originalCast, setOriginalCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOriginalCast = async () => {
      try {
        const fetchedOriginalCast = await fetchOriginalCast(id);
        setOriginalCast(fetchedOriginalCast);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getOriginalCast();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <h2>Elenco Original</h2>
      <div className="cast-container">
        {originalCast && originalCast.map((actor) => (
          <div key={actor.name}>
            {actor.profile_path ? (
              <img
                src={`${BASE_FILM_IMG}/w185${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div>No Image</div>
            )}
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
