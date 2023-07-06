import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoadin] = useState(true);
  const [error, setError] = useState(null);
  return (
    <div>
      <h1>Detalhes do filme</h1>
    </div>
  );
}
