import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOriginalCast } from "../../services/apiService";
import { BASE_FILM_IMG } from "../../constants/urls";
import {
  ActorName,
  CastContainer,
  CastImage,
  CastMember,
  CharacterName,
  SectionTitle,
} from "./style";

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
      <SectionTitle>Elenco Original</SectionTitle>
      <CastContainer>
        {originalCast &&
          originalCast.map((actor) => (
            <CastMember key={actor.name}>
              {actor.profile_path ? (
                <CastImage
                  src={`${BASE_FILM_IMG}/original${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div>Image not found</div>
              )}
              <ActorName>{actor.name}</ActorName>
              <CharacterName>{actor.character}</CharacterName>
            </CastMember>
          ))}
      </CastContainer>
    </section>
  );
}
