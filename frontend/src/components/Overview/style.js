import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const DetailsContainer = styled.div`
width: 1900px;
background-color: ${filterBackground};
height: 590px;
`;

export const ContentWrapper = styled.div`
max-width: 1700px;
padding: 20px;

/* Estilos adicionais para dispositivos móveis */
@media (max-width: 768px) {
max-width: 1400px;
padding: 10px;
}
`;

export const ImageCard = styled.img`
width: 380px;
margin: 63px 0 0 98px;
border-radius: 6px;
-webkit-box-shadow: 0 6px 26px -6px #222;
-moz-box-shadow: 0 6px 26px -6px #222;
box-shadow: 0 6px 26px -6px #222;
`;

export const DetailsPageTitle = styled.h1`
color: #fff;
margin: -568px 0 420px 512px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 2.2rem;
`;

export const MovieInfo = styled.div`
margin:-412px 0 0 520px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 1.2rem;
`;

export const ProgressbarContainer = styled.div`
border-radius: 50%;
width:83px;
margin:23px 0 0 520px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1.2rem;
font-weight: 700;
background-color: #42246d;
`;

export const LabelProgress = styled.p`
width:130px;
margin:-66px 0 0 620px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1rem;
font-weight: 600;
color: #fff;
`;

export const Synopsis = styled.h1`
margin: 63px 0 0 520px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1.5rem;
font-weight: 600;
color: #fff;
`;

export const TextOverview = styled.p`
margin: 12px 0 0 520px;
padding-right: 12px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1rem;
color: #dddddd;
line-height: 23px;
`;

export const CrewInfoSection = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 32px 0 0 520px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
color: #fff;
line-height: 26px;
gap: 86px;

/* Estilos adicionais para dispositivos móveis */
/* @media (max-width: 768px) {
flex-wrap: nowrap;
  } */
`;

export const CrewName = styled.h2`
font-size: 1rem;
color: #dddddd;
`;
