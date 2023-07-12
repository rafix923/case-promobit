import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
height: 55vh;
background-color: ${filterBackground};
padding-top: 46px;
overflow-x: hidden;
`;

export const ImageCard = styled.img`
display: flex;
flex-direction: column;
position: absolute;
width: 25rem;
margin: 100px 0 0 230px;
`;

export const DetailsPageTitle = styled.h1`
margin: 100px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
width: max-content;
`;

export const MovieInfo = styled.div`
display: flex;
flex-direction: row;
position: absolute;
margin: 150px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
width: 100vw;
`;

export const Synopsis = styled.h1`
display: flex;
flex-direction: row;
position: absolute;
margin: 312px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
width: max-content;
`;

export const TextOverview = styled.p`
display: flex;
flex-direction: row;
position: absolute;
justify-content: center;
width: 50vw;
margin: 356px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
line-height: 26px;
font-size: 1.2rem;
width: 1280px;
`;

