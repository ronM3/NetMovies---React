import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieRow from "../components/MovieRow";
import Movie from '../components/Movie'
import { Col, Container, Row } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroller";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  // const keyWord = params.keyWord;
  // const [searchValue, setSerchValue] = useState("");
  const [loadCount, setLoadCount] = useState(6);
  const [counter, setCounter] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [responseStatus, setResponseStatus] = useState('');

  const totalPage = Math.ceil(movies.length / 6);

  const handleLoadMore = async () => {
    if (counter < totalPage) {
      setLoadCount((prevState) => prevState + 6);
      const { data: {results}, data: {page} } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage+1}`
      );
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage+1}`
      );
      setResponseStatus(response.status)
      setMovies(results);
      setCurrentPage(page)
      setCounter((prevState) => prevState + 1);
    }
  };
    const loadMoreCards = useCallback(async () => {
    if (responseStatus !== 10) {
      const nextPage = currentPage + 1;
      const { data: {results}, data: {page} } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${nextPage}`
      );
      setMovies(results);
      setCurrentPage(page)
    }
  }, [responseStatus, currentPage]);

  const initInifinity = {
    currentPage: currentPage,
    hasMoreElements: false || true,
  };

  // const handleClick = (e) =>{
  //   console.log('hi')
  // }

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: {results}, data: {page} } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(results);
      setMovies(results);
      setCurrentPage(page)

      console.log(initInifinity);
    };

    fetchMovies()
    console.log(movies);

    // window.addEventListener('click', handleClick)
  }, []);

  return (
    <>
      <h3 className="pup_title">Pupolar</h3>
      <Row>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMoreCards}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {movies.map((movie) => (
            <Col className="mt-4" key={movie.id} sm={12} md={6} lg={4} xl={3}>
              <Movie movie={movie} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
      {/* <Row  padding="1rem">
        {movies.slice(0, loadCount).map((movie) => (
      <Col className="mt-4" key={movie.id} sm={12} md={6} lg={4} xl={3}>
      <Movie movie={movie} />
    </Col>
        ))}
       
      </Row>
      <Button
          colorScheme="blue"
          size="sm"
          onClick={handleLoadMore}
          display={counter === totalPage ? 'none' : ''}
          data-testid="load-more-button"
        >
          Load More
        </Button> */}
          {/* <section className="lists">
                {movies.length>1 && movies.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section> */}
    </>
  );
};

export default HomePage;
