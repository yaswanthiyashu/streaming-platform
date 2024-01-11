import React, { useEffect } from "react";
import { Container, Pagination, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  searchMovies,
  setCurrentPageNumber,
} from "../../redux/actions/movieActions";
import "./Body.css";
import Movies from "../Movies/Movies";
import Search from "../SearchBar/Search";
import errorImg from "../../locals/error.gif";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Body = () => {
  const {
    isLoading,
    moviesList,
    hasError,
    error,
    isSearching,
    searchList,
    totalPages,
    currentPageNumber,
    query,
  } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSearching) {
      dispatch(fetchMovies(currentPageNumber));
    } else {
      dispatch(searchMovies(query, currentPageNumber));
    }
  }, [dispatch, currentPageNumber, isSearching, query]);

  const handleChangePageNumber = (page) => {
    if (currentPageNumber) {
      dispatch(setCurrentPageNumber(page));
    }
  };

  const handlePrev = () => {
    if (currentPageNumber - 1) {
      dispatch(setCurrentPageNumber(currentPageNumber - 1));
    }
  };
  const handleNext = () => {
    if (currentPageNumber < totalPages) {
      dispatch(setCurrentPageNumber(currentPageNumber + 1));
    }
  };

  return (
    <>
      <Search />

      <div className="container">
        <div className="trending">
          <h1 className="heading display-4">
            {isSearching ? "Search Results" : "Trending"}
          </h1>
          <br />
          <hr />
        </div>

        {isLoading && (
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {hasError && (
          <>
            {" "}
            <h1 className="display-6">
              <img src={errorImg} width={500} alt="#" />
              <br />
              {error}
            </h1>
          </>
        )}
        <Movies moviesList={!isSearching ? moviesList : searchList} />
        {!hasError && (
          <Container>
            {(moviesList.length || searchList.length) && (
              <Pagination className="pagination">
                <Pagination.Prev
                  id="prev"
                  onClick={handlePrev}
                  disabled={currentPageNumber <= 1}
                />
                {totalPages &&
                  [
                    ...Array(
                      totalPages >= 10 ? totalPages : totalPages + 1
                    ).keys(),
                  ]
                    .slice(
                      currentPageNumber,
                      totalPages >= 10 ? 10 + currentPageNumber : totalPages + 1
                    )
                    .map((page, index) => (
                      <Pagination.Item
                        key={index}
                        active={currentPageNumber === page}
                        onClick={() => handleChangePageNumber(page)}
                      >
                        {page}
                      </Pagination.Item>
                    ))}
                <Pagination.Ellipsis disabled />
                <Pagination.Next onClick={handleNext} />
              </Pagination>
            )}
          </Container>
        )}
      </div>
    </>
  );
};

export default Body;
