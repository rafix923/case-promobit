import React from "react";
import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import { MainContainer } from "./style";

export default function DetailsPage() {
  return (
    <MainContainer>
      <Header />
      <Overview />
    </MainContainer>
  );
}
