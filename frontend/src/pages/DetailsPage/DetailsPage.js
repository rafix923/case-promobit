import React from "react";
import Header from "../../components/Header/Header";
import BoxOverview from "../../components/BoxOverview/BoxOverview";
import { MainContainer } from "./style";

export default function DetailsPage() {
  return (
    <MainContainer>
      <Header />
      <BoxOverview />
    </MainContainer>
  );
}
