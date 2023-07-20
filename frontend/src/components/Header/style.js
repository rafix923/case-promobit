import styled from "styled-components";
import { headerBackground } from "../../constants/colors";

export const HeaderStyled = styled.div`
position: static;
background: ${headerBackground};
`;

export const Img = styled.img`
padding: 12px;
margin-left: 62px;

@media ((min-width:481px ) and (max-width: 800px)){
    margin: 0 0 0 140px;
}

 @media ((min-width:320px ) and (max-width: 480px)){
    padding: 10px 0;
    margin: 10px 20px 0 96px; 
}
`;
