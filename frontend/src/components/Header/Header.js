import React from "react";
import { HeaderStyled, Img } from "./style";
import { goToHome } from "../../Routes/Coordinator";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <div>
        {" "}
        <Img src={logo} alt="Tmdb logo" onClick={() => goToHome(navigate)} />
      </div>
    </HeaderStyled>
  );
}
