import React from "react";
import { Button } from "./style";


export default function MovieGenre(props) {
  const { name } = props;

  return <Button>{name}</Button>;
}
