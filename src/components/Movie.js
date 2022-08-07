import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { apiConfig } from "../Api/apiConfig";

const Movie = ({ movie }) => {
    const navigate = useNavigate()
  return (
   
      <Card style={{ maxWidth: '15rem', maxHeight: '27rem' }} className="my-3 rounded movie_card">
        <Card.Body>
        <Link to={`/movie/${movie.id}`}>
          <Card.Img className="card_img" style={{ maxWidth: '22rem', maxHeight: '17rem' }}  src={apiConfig.w500Image(movie.poster_path)} />
          </Link>
        </Card.Body>
      </Card>
  );
};

export default Movie;
