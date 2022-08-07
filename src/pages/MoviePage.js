import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { apiConfig } from "../Api/apiConfig";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'

const MoviePage = () => {
    const params = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchMovieData = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=74cbdc0a05ef78a6dea12aa54b63bf23`);
            setMovie(data)
        }
        fetchMovieData()
    }, [])
    

  return (
    <>
       <Row>
          <Col md={3}>
            <Image src={apiConfig.w500Image(movie.poster_path)} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="light">
              <ListGroup.Item variant="light">
                <h3>{movie.original_title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {movie.overview}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card className="">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Budget:</Col>
                    <Col sm={12} md={6} lg={4} xl={12}>
                      <strong>${movie.budget}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default MoviePage;
