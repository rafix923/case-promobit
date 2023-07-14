import styled from "styled-components";

export const SectionTitle = styled.h2`
margin: 86px 0 26px 120px; 
display: flex;
flex-direction: column;
width: 100;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;

`;

export const CastContainer = styled.section`
display: flex;
position: relative;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans","Helvetica Neue", sans-serif;
width: 1660px;
margin: 0 0 0 120px; 
overflow: scroll;
overflow-y: hidden;
`;

export const CastMember = styled.div`
margin: 0 16px 20px 0;
border: 1px solid lightgray;
border-radius: 4px;
-webkit-box-shadow: 0 4px 16px -6px #222;
-moz-box-shadow: 0 4px 16px -6px #222;
box-shadow: 0 4px 16px -6px #222;
`;

export const CastImage = styled.img`
height: 225px;
border-radius: 5px;
margin: 3px 10px;
`;

export const ActorName = styled.p`
font-weight: bold;
line-height: 30px;
margin-left: 10px;
`;

export const CharacterName = styled.p`
margin: 0 0 8px 10px;
font-weight: 300;
color: var(--neutral-colors-gray-gray-900, #131313);
`;