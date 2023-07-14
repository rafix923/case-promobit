import React from "react";
import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import Casting from "../../components/Casting/Casting";
import Trailer from "../../components/Trailer/Trailer";
import { MainContainer } from "./style";
import Recommendations from "../../components/Recommendations/Recommendations";

export default function DetailsPage() {
  return (
    <MainContainer>
      <Header />
      <Overview />
      <Casting />
      <Trailer />
      <Recommendations />
    </MainContainer>
  );
}
