import styled from "styled-components";
import { filterBackground } from "../../constants/colors";
import { Roboto } from "../../constants/fonts";

export const FilterBoxStyled = styled.div`
font-family: ${Roboto};
width: 1900px;
padding-bottom: 60px;
background-color: ${filterBackground};

@media ((min-width:800px ) and  (max-width: 1920px)){
    /* display: flex;
    flex-direction: row; */
    width: 100vw;
    background-color: red;
}

@media ((min-width:481px ) and (max-width: 799px)){
    /* display: flex;
    flex-direction: row; */
    width: 799px;
    background-color: pink;
}

@media ((min-width:320px ) and (max-width: 480px)){
    width: 480px;
}
`;

export const FilterBoxTitle = styled.div`
color: #fff;
width: 650px;
margin: 0 auto;
padding-top: 70px ;
font-size: 1.2rem;
text-align: center;

@media ((min-width:481px ) and (max-width: 799px)){
    background-color: lightgreen;
    display: flex;
    flex-wrap: wrap;
    width: 799px;
    font-size: 0.89rem;
}

@media ((min-width:320px ) and (max-width: 480px)){
    width: 370px;
    font-size: 0.80rem;
}
`;

export const FilterBoxParagraph = styled.div`
text-align: center;
margin: 32px 0;
color: #fff;
font-size: 0.82rem;
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
gap: 10px;
flex-wrap: wrap;
color: aliceblue;
`;
