import styled from "styled-components";
import { Roboto } from "../../constants/fonts";

export const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 36px 0 30px 110px; 
gap: 20px;

@media ((min-width:481px ) and (max-width: 799px)){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 0 0  12px;
    gap: 0;
    justify-content: space-around;
}

@media ((min-width:320px ) and (max-width: 480px)){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 480px;
    margin: 20px 0 0  0;
    gap: 0;
    justify-content: space-around;
}

  :hover{
    cursor: pointer;
    transform: scale(1.20);
    transition: transform 0.3s ease;
  }
`;

export const PaginateStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  .pagination {
    display: flex;
    justify-content: center;
    font-family: ${Roboto};
    font-style: normal;
    color: #5c16c5;
    list-style-type: none;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 200px;

    li {
      a {
        margin: 16px;
        cursor: pointer;
      }
    }
  }

  .active {
    font-weight: bolder;
    color: #c163e9;
    font-size: 1rem;
  }

  img {
    width: 23px;
    margin-top: 2px;
    color: #5c16c5;
  }
`;

export const LastPage = styled.p`
  color: #5c16c5;
  text-align: end;
  font-family: ${Roboto};
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: -227px;
  margin-left: 342px;
`;
