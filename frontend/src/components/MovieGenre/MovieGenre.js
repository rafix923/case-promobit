import React from "react";

export default function MovieGenre({ name, onClick, active }) {
  const { name } = props;
  return (
    <button type="button" onClick={onclick}>
      {name}
    </button>
  );
}
