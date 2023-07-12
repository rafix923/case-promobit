import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCertification } from "../../services/apiService";
import { BASE_FILM_IMG, KEY_API } from "../../constants/urls";
import { format, getYear } from "date-fns";
import axios from "axios";
import {
  DetailsContainer,
  DetailsPageTitle,
  ImageCard,
  Synopsis,
  TextOverview,
  MovieInfo,
} from "./style";

export default function Overview() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [releaseDate, setReleaseDate] = useState({});
  const [certification, setCertification] = useState("");

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

    const getReleaseDate = async () => {
      try {
        const response = await axios.get(
          `${BASE_FILM_IMG}/movie/${id}/release_dates?api_key=${KEY_API}`
        );
        const data = response.data.results;
        for (let obj of data) {
          if (obj.iso_3166_1 === "BR") {
            setReleaseDate(obj);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getCertification = async () => {
      try {
        const fetchedCertification = await fetchMovieCertification(id);
        setCertification(fetchedCertification);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
    getReleaseDate();
    getCertification();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { title, poster_path, release_date, runtime, genres } = movie;

  const dateFormatted = release_date
    ? format(new Date(release_date), "dd/MM/yyyy")
    : "";
  const year = release_date ? getYear(new Date(release_date)) : "";
  const movieHour = runtime ? Math.floor(runtime / 60) : "";
  const movieMin = runtime ? runtime % 60 : "";

  return (
    <DetailsContainer>
      <ImageCard src={`${BASE_FILM_IMG}/w500/${poster_path}`} alt={title} />
      <DetailsPageTitle>{title}</DetailsPageTitle>
      <MovieInfo>
      {`${certification} anos`}  {dateFormatted} (BR) {movieHour}h {movieMin}min{" "}
        {genres
          ? genres.map(
              (genre, index) =>
                ` ${genre.name}${index + 1 === genres.length ? " " : ", "}`
            )
          : ""}
      </MovieInfo>
      <Synopsis>Sinopse</Synopsis>
      <TextOverview>{movie.overview}</TextOverview>
    </DetailsContainer>
  );
}
