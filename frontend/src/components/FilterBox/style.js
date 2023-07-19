import styled from "styled-components";
import { filterBackground } from "../../constants/colors";
import { Roboto } from "../../constants/fonts";

export const FilterBoxStyled = styled.div`
font-family: ${Roboto};
background-color: ${filterBackground};
height: 61vh;

@media ((min-width:320px ) and (max-width: 480px)){
   height: 90vh;
}
`;

export const FilterBoxTitle = styled.div`
color: #fff;
flex-wrap: wrap;
margin: 0 auto;
text-align: center;
padding-top: 70px ;

@media ((min-width:1200px )and (max-width: 1960px)){
width: 40%;
}

@media ((min-width:481px ) and (max-width: 800px)){
    width: 90%;
    text-align: left;

}

@media ((min-width:320px ) and (max-width: 480px)){
    width: 90%;
    text-align: left;
}
`;

export const FilterBoxParagraph = styled.div`
text-align: center;
margin: 32px 0;
color: #fff;


@media ((min-width:481px ) and (max-width: 800px)){
    text-align: left;
    margin-left: 21px;
}

@media ((min-width:320px ) and (max-width: 480px)){
    text-align: left;
    margin-left: 21px;
}
`;

export const ButtonsContainer = styled.section`
max-width: 1090px;
margin: 0 auto;

@media ((min-width:799px )and (max-width: 1960px)){
width: 90%;
}
`;

export const Buttons = styled.div`
display: flex;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
color: aliceblue;

@media ((min-width:481px ) and (max-width: 800px)){
    justify-content: left;
    margin-left: 21px;
}

@media ((min-width:320px ) and (max-width: 480px)){
    justify-content: left;
    margin-left: 20px;
}
`;
