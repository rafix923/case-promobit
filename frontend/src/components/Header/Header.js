import React from "react";
import { HeaderLogo, HeaderStyled } from "./style";
import { goToHome } from "../../Routes/Coordinator";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <HeaderLogo>
        {" "}
        <img src={logo} alt="Tmdb logo" onClick={() => goToHome(navigate)} />
      </HeaderLogo>
    </HeaderStyled>
  );
}
