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
  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination {
    display: flex;
    justify-content: center;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
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
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: -227px;
  margin-left: 342px;
`;
