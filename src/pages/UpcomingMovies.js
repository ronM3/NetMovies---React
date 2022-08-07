import React from 'react'
import { useState, useEffect } from "react";
import Movie from '../components/Movie';
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const fetchUpcoming = async () => {
          const {
            data: { results },
          } = await axios.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=74cbdc0a05ef78a6dea12aa54b63bf23"
          );
          setUpcomingMovies(results);
        };
        fetchUpcoming();
      
      }, []);

  return (
    <>  <h3 className="pup_title">Upcoming Movies</h3>
    <Row>
      {upcomingMovies.map((movie) => (
        <Col className="mt-4" key={movie.id} sm={12} md={6} lg={4} xl={3}>
          <Movie movie={movie} />
        </Col>
      ))}
    </Row></>
  )
}

export default UpcomingMovies