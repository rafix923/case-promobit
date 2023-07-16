import styled from "styled-components";
import { Roboto } from "../../constants/fonts";

export const MovieTitle = styled.h2`
text-align: left;
width: 180px;
font-size: 1.1rem;
font-weight: 600;
font-family: ${Roboto};
pointer-events: none;
`;

export const MovieRealese = styled.p`
color: #646464;
font-size: 14px;
font-family: ${Roboto};
font-style: normal;
font-weight: 700;
line-height: 3vh;
margin-bottom:32px;
pointer-events: none;
`;

export const CardImg = styled.img`
border-radius: 4px;

@media ((min-width:320px ) and (max-width: 480px)){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 8px;
}
  `;
