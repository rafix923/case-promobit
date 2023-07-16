import styled from "styled-components";
import { headerBackground } from "../../constants/colors";

export const HeaderStyled = styled.div`
display: flex;
position: static;
background: ${headerBackground};

@media ((min-width:800px ) and  (max-width: 1920px)){
    display: flex;
    flex-direction: row;
    width: 1920px;
}

@media ((min-width:481px ) and (max-width: 799px)){
    display: flex;   
    width: 500px;
}

@media ((min-width:320px ) and (max-width: 480px)){
    width: 480px;
    font-size: 0.80rem;
}
`;

export const HeaderLogo = styled.div`
 margin: 12px 0 6px 55px;
`;

export const Img = styled.img`
 @media ((min-width:481px ) and (max-width: 799px)){
    margin: 3px 0 3px 116px; 
}
 @media ((min-width:320px ) and (max-width: 480px)){
    width: 136px;
    margin: 3px 0 3px 86px; 
}
`;
