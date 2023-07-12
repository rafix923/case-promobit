import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCertification,
  fetchMovieCrewInfo,
} from "../../services/apiService";
import { BASE_FILM_IMG, KEY_API } from "../../constants/urls";
import { format, getYear } from "date-fns";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  DetailsContainer,
  DetailsPageTitle,
  ImageCard,
  Synopsis,
  TextOverview,
  MovieInfo,
  ProgressbarContainer,
} from "./style";
import { mainProgressbarColor } from "../../constants/colors";

export default function Overview() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [releaseDate, setReleaseDate] = useState({});
  const [certification, setCertification] = useState("");
  const [crewInfo, setCrewInfo] = useState([]);

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

    const getCrewInfo = async () => {
      try {
        const fetchedCrewInfo = await fetchMovieCrewInfo(id);
        setCrewInfo(fetchedCrewInfo);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
    getReleaseDate();
    getCertification();
    getCrewInfo();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { title, poster_path, release_date, runtime, genres, vote_average } =
    movie;

  const dateFormatted = release_date
    ? format(new Date(release_date), "dd/MM/yyyy")
    : "";

  const year = release_date ? getYear(new Date(release_date)) : "";
  const movieHour = runtime ? Math.floor(runtime / 60) : "";
  const movieMin = runtime ? runtime % 60 : "";
  const percentage = (vote_average / 100) * 10;

  return (
    <DetailsContainer>
      <ImageCard src={`${BASE_FILM_IMG}/w500/${poster_path}`} alt={title} />
      <DetailsPageTitle>
        {title}({year})
      </DetailsPageTitle>
      <MovieInfo>
        {`${certification} anos`} {dateFormatted} (BR)
        {genres
          ? genres.map(
              (genre, index) =>
                ` ${genre.name}${index + 1 === genres.length ? " " : ", "}`
            )
          : ""}
        {movieHour}h {movieMin}min{""}
      </MovieInfo>
      <ProgressbarContainer>
        <CircularProgressbar
          value={percentage}
          maxValue={1}
          text={`${vote_average * 10}%`}
          styles={buildStyles({
            rotation: 0.5 + (1 - percentage / 100) / 2,
            pathColor: `${mainProgressbarColor}`,
            textColor: `${mainProgressbarColor}`,
            trailColor: "#42246d",
          })}
        />
        <p>Avaliação dos usuários</p>
      </ProgressbarContainer>
      <Synopsis>Sinopse</Synopsis>
      <TextOverview>{movie.overview}</TextOverview>
      <section>
      {Object.entries(crewInfo).map(([key, value]) => (
    <div key={key}>
      <h2>{key}</h2>
      <p>{value}</p>
    </div>
  ))}
      </section>
    </DetailsContainer>
  );
}
