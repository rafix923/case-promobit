import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTrailer } from "../../services/apiService";
import YouTube from "react-youtube";

export default function Trailer() {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrailerUrl = async () => {
      try {
        const url = await fetchMovieTrailer(id);
        setTrailerUrl(url);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getTrailerUrl();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {trailerUrl ? (
        <YouTube videoId={getVideoId(trailerUrl)} />
      ) : (
        <div>No trailer available</div>
      )}
    </div>
  );
}

/*Essa função é utilizada para obter o id do vídeo a partir da URL completa
e passá-la ao componente YouTube para reproduzir o vídeo corretamente.*/

function getVideoId(url) {
  const params = new URLSearchParams(new URL(url).search);
  return params.get("v");
}
