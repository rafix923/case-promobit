import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const FilterBoxStyled = styled.div`
display: flex;
flex-direction: column;
height: 55vh;
background-color: ${filterBackground};
padding-top: 46px;
overflow-x: hidden;
`;

export const FilterBoxTitle = styled.div`
display: flex;
text-align: center;
color: #FFF;
width: 550px;
margin: 0 auto;
padding: 30px;
font-size: 1rem;
font-family:  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const FilterBoxParagraph = styled.div`
text-align: center;
color: #fff;
padding-bottom: 30px;
`;

export const ButtonsContainer = styled.section`
max-width: 1090px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
`;

export const Buttons = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin: 0 auto;
gap: 10px;
flex-wrap: wrap;
color: aliceblue;
`;
