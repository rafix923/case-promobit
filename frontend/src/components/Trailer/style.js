import styled from "styled-components";
import { Roboto } from "../../constants/fonts";

export const Title = styled.h1`
margin: 35px 0 21px 120px;
font-family: ${Roboto};
font-size: 2.2rem;

@media((min-width:320px) and (max-width: 480px)){
   margin: 46px 0 16px 32px;
   width: 326px;
   font-size: 1.9rem;
}
`;

export const Video = styled.div`
margin: 35px 0 21px 120px;


@media((min-width:320px) and (max-width: 480px)){
   margin: 0 0 0 32px;
}
`;
