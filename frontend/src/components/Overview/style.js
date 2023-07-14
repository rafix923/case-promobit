import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const DetailsContainer = styled.div`
width: 1900px;
background-color: ${filterBackground};
border: 6px solid;
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
/* display: flex;
position: relative; */
width: 410px;
margin: 63px 0 0 230px;
border: 6px solid;
`;

export const DetailsPageTitle = styled.h1`
color: #fff;
margin: -612px 0 420px 650px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 2.2rem;
border: 1px solid red;
`;

export const MovieInfo = styled.div`
margin:-412px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 1.2rem;
border: 1px solid blueviolet;
`;

export const ProgressbarContainer = styled.div`
border-radius: 50%;
width:83px;
margin:12px 0 0 650px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1.2rem;
font-weight: 700;
background-color: #42246d;
`;

export const LabelProgress = styled.p`
border: 1px solid yellow;
width:130px;
margin:-66px 0 0 750px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1rem;
font-weight: 600;
color: #fff;
`;

export const Synopsis = styled.h1`
border: 1px solid blueviolet;
margin: 52px 0 0 650px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1.3rem;
font-weight: 600;
color: #fff;
`;

export const TextOverview = styled.p`
border: 1px solid blueviolet;
margin: 12px 0 0 650px;
padding-right: 12px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-size: 1rem;
color: #fff;

`;

export const CrewInfoSection = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
border: 1px solid blueviolet;
margin: 12px 0 0 650px;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
color: #fff;
gap: 36px;

/* Estilos adicionais para dispositivos móveis */
/* @media (max-width: 768px) {
flex-wrap: nowrap;
  } */
`;

export const CrewName = styled.h2`
border: 1px solid #fff;
/* width: max-content; */
font-size: 1.2rem;
/* margin-right: 23px; */
margin: 0 20px 0 0 ;
font-size: 1.3rem;
`;
