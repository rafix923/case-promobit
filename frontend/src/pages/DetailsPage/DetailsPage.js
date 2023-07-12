import React from "react";
import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import { MainContainer } from "./style";
import Casting from "../../components/Casting/Casting";

export default function DetailsPage() {
  return (
    <MainContainer>
      <Header />
      <Overview />
      <Casting />
    </MainContainer>
  );
}
