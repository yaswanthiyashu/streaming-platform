import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./FullMovie.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { fetchSingleMovie } from "../../redux/actions/movieActions";

const FullMovie = () => {
  const dispatch = useDispatch()
  const { movie_id } = useParams();
  const { singleMovie, isLoading  } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchSingleMovie(movie_id))
  }, [dispatch])

  
  const movie = singleMovie

  return (
    <Container className="full-movie">
      <div className="full-movie-details">
        <Link to="/" className="full-movie-back-btn">
          <MdKeyboardBackspace size={30} />
        </Link>
        <Container className="full-movie-text">
          <h1 className="display-2">{singleMovie.original_title}</h1>
          <div className="rating">
            <span>{`Rating: ${(singleMovie.vote_average / 2)
              .toString()
              .slice(0, 3)}/5`}</span>
          </div>
          <br />
          <p>{singleMovie.overview || singleMovie.title}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>
            {singleMovie.original_language &&
              `Original Language: ${
                movie.original_language === "en"
                  ? "English"
                  : movie.original_language
              }`}
          </p>
        </Container>
      </div>

      <img
        className="full-movie-image"
        src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`}
        alt="loading"
      />
    </Container>
  );
};

export default FullMovie;
