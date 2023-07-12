import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
height: 65vh;
width: 100vw;
background-color: ${filterBackground};
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
width: max-content;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 2.2rem;
`;

export const MovieInfo = styled.div`
display: flex;
flex-direction: row;
position: absolute;
margin: 150px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
width:582px;
font-size: 1.2rem;
`;

export const ProgressbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 82px;
  position: absolute;
  margin: 192px 0 0 650px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: #42246d;
  border-radius: 50%;
  
  p{
      display: flex;
      flex-direction: row;
      position: absolute;
      margin: 9px 0 0 245px;
      color: #fff;
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
      width: 130px;
      font-weight: 100;
    }
    `;

export const Synopsis = styled.h1`
display: flex;
flex-direction: row;
width: max-content;
position: absolute;
margin: 312px 0 0 650px;
color: #fff;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
font-size: 1.6rem;
`;

export const TextOverview = styled.p`
display: flex;
flex-direction: row;
position: absolute;
justify-content: center;
width: 50vw;
margin: 356px 0 0 650px;
color: #dddddd;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
line-height: 26px;
font-size: 1.2rem;
width: 1080px;
`;

export const CrewInfoSection = styled.section`
display: flex;
flex-direction: row;
position: absolute;
width: 56vw;
color: #dddddd;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
margin: 430px 0 0 649px;
flex-wrap: wrap;
gap: 16px; 
`;

export const CrewName = styled.h2`
    margin-right: 23px;
    line-height: 4vh;
    font-size: 1.2rem;
`;
