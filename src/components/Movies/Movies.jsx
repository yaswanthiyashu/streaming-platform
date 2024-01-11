import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Movies.css";

function Movies({ moviesList }) {
  const { isLoading } = useSelector((state) => state.movie);

  return (
    <Container className="movies-container">
      <Row>
        {!isLoading &&
          moviesList.map((movie, index) => (
            <Col sm={5} md={3} key={index} as={NavLink} to={`/movie/${movie.id}`}>
              <Container className="movie-container ">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="loading"
                />
                <div className="description">
                  <div className="details">{movie.original_title}</div>
                  <div className="rating">
                    <Rating size={20} initialValue={movie.vote_average / 2} />
                    <span style={{ alignItems: "center" }}>{`${(
                      movie.vote_average / 2
                    )
                      .toString()
                      .slice(0, 3)}/5`}</span>
                  </div>
                </div>
              </Container>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Movies;
