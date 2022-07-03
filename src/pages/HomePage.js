import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Movie from "../components/Movie";
import SearchBox from "../components/SearchBox";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const keyWord = params.keyWord
  const [searchValue, setSerchValue] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: {results} } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=74cbdc0a05ef78a6dea12aa54b63bf23"
      );
        setMovies(results)
    
      console.log(results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <Movie movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
