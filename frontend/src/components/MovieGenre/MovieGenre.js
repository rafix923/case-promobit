import React from "react";

export default function MovieGenre({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}
