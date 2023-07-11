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

export const CardOverview = styled.img`
display: flex;
flex-direction: column;
position: absolute;
width: 25rem;
margin: 100px 0 0 230px;
`;

export const DetailsPageTitle = styled.h1`
display: flex;
flex-direction: row;
position: absolute;
justify-content: center;
margin: 100px 0 0 650px;
`;

export const TextOverview = styled.p`
display: flex;
flex-direction: column;
background-color: red;
width: 320px;
margin-left: 290px;
font-size: 1.2rem;
`;
