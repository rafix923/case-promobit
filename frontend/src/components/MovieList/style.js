import styled from "styled-components";

export const CardsContainer = styled.div`
display: flex;
flex-direction: row;
padding-top: 25px;
justify-content: space-between;
flex-wrap: wrap;
width: 87vw;
margin: 0 auto;
gap: 20px;
`;

export const PaginateStyled = styled.div`
 .pagination {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    color: #5C16C5;
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
  }

    img{
        width: 23px;
        margin-top: 2px;
        color: #5C16C5;            
    }
`;
