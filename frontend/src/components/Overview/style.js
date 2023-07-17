import styled from "styled-components";
import { filterBackground } from "../../constants/colors";
import { Roboto } from "../../constants/fonts";

export const DetailsContainer = styled.div`
width: 1900px;
background-color: ${filterBackground};
height: 590px;
font-family: ${Roboto};


@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 182vh;
}
`;

export const ContentWrapper = styled.div`
padding: 20px;
`;

export const ImageCard = styled.img`
width: 380px;
margin: 63px 0 0 98px;
border-radius: 6px;
-webkit-box-shadow: 0 6px 26px -6px #222;
-moz-box-shadow: 0 6px 26px -6px #222;
box-shadow: 0 6px 26px -6px #222;

@media ((min-width:320px) and (max-width: 480px)){
    width: 239px;
    margin: 16px 0 0 50px ;
}
`;

export const DetailsPageTitle = styled.h1`
color: #fff;
margin: -568px 0 420px 512px;
font-family: ${Roboto};
font-size: 2.6rem;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    margin: 36px 0 0 0;
    width: 280px;
    font-size: 1.3rem;
}
`;

export const MovieInfo = styled.div`
margin:-412px 0 0 520px;
color: #fff;
font-size: 1.2rem;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    margin: 16px 0 0 0;
    width: 280px;
    font-size: 1rem;
}
`;

export const ProgressbarContainer = styled.div`
border-radius: 50%;
width:83px;
margin:23px 0 0 520px;
font-size: 1.2rem;
font-weight: 700;
background-color: #42246d;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    margin: 46px 0 0 0;
    font-size: 1.2rem;
    align-items: center;
}
`;

export const LabelProgress = styled.p`
width:130px;
margin:-66px 0 0 620px;
font-size: 1rem;
font-weight: 600;
color: #fff;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    margin: -67px 0 0 94px;
    font-size: 1.2rem;
    font-weight: 100;
    align-items: center;
}
`;

export const Synopsis = styled.h1`
margin: 63px 0 0 520px;
font-size: 1.5rem;
font-weight: 600;
color: #fff;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: column;
    margin: 52px 0 0 0;
    font-size: 1.3rem;
}
`;

export const TextOverview = styled.p`
margin: 12px 0 0 520px;
padding-right: 12px;
font-size: 1.06rem;
color: #dddddd;
line-height: 23px;

@media((min-width:320px) and (max-width: 480px)){
    margin: 16px 0 0 0;
    font-size: 1rem;
    width: 350px;
}
`;

export const CrewInfoSection = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 32px 0 0 520px;
color: #fff;
line-height: 26px;
gap: 86px;

@media((min-width:320px) and (max-width: 480px)){
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin: 46px 0 0 0;
    font-size: 1rem;
    width: 350px;
}
`;

export const CrewName = styled.h2`
font-size: 1rem;
color: #dddddd;
`;
