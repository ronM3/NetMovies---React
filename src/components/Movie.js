import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { apiConfig } from "../Api/apiConfig";

const Movie = ({ movie }) => {
    const navigate = useNavigate()
  return (
   
      <Card className="my-3 rounded">
        <Card.Body>
        <Link to={`/movie/${movie.id}`}>
          <Card.Img src={apiConfig.w500Image(movie.poster_path)} />
          </Link>
        </Card.Body>
      </Card>
  );
};

export default Movie;
