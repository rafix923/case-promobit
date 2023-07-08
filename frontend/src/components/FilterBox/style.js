import styled from "styled-components";
import { filterBackground } from "../../constants/colors";

export const FilterBoxStyled = styled.div`
height: 35vh;
background-color: ${filterBackground};
padding-top: 46px;
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
padding-bottom: 23px;
`;
