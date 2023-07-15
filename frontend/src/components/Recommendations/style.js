import styled from "styled-components";
import { Roboto } from "../../constants/fonts";

export const RelatedMoviesImage = styled.img`
height: 250px;
border-radius: 5px;
margin: 3px 10px;
`;

export const SectionTitle = styled.h2`
margin: 86px 0 26px 120px; 
display: flex;
flex-direction: column;
font-family: ${Roboto};
font-size: 2rem;
`;

export const RelatedMoviesContainer = styled.section`
display: flex;
position: relative;
flex-direction: row;
flex-wrap: wrap;
width: 1660px;
margin: 36px 0 120px 110px; 
font-family: ${Roboto};
`;

export const MovieTitle = styled.p`
display: flex;
position: relative;
flex-direction: row;
flex-wrap: wrap;
font-weight: bold;
margin: 5px 16px 3px 10px;
width: 180px;
`;

export const RealeaseDate = styled.p`
margin: 0 0 8px 10px;
font-weight: 300;
color: #646464;
font-weight: 600;
margin: 10px 0 30px 10px;
`;
