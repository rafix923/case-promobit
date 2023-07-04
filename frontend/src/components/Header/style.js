import styled from "styled-components";
import { headerBackground } from "../../constants/colors";

export const HeaderStyled = styled.div`
background: ${headerBackground};
height: 4vh;

p{
    padding: 5px 40px;
    font-weight: 600;
    letter-spacing:3px;
    color: #fff;
}
`;
