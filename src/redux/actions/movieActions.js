import axios from "axios";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIES_FAILURE,
  FETCH_SINGLE_MOVIES_LOADING,
  FETCH_SINGLE_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_LOADING,
  SEARCH_MOVIES_SUCCESS,
  SET_PAGE_NUMBER,
  SEARCH_QUERY,
} from "../types/movieTypes";
import { apiKey } from "../../locals/apiKey";


// <! -------fecthing movies ----->

const fetchMoviesLoading = () => {
  return {
    type: FETCH_MOVIES_LOADING,
  };
};

const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

const fetchSingleMoviesLoading = () => {
  return {
    type: FETCH_SINGLE_MOVIES_LOADING,
  };
};

const fetchSingleMoviesSuccess = (movies) => {
  return {
    type: FETCH_SINGLE_MOVIES_SUCCESS,
    payload: movies,
  };
};

const fetchSingleMoviesFailure = (error) => {
  return {
    type: FETCH_SINGLE_MOVIES_FAILURE,
    payload: error,
  };
};
// <! -------fecthing movies ----->



// <! -------searching movies ----->

export const searchMoviesLoading = () => {
  return {
    type: SEARCH_MOVIES_LOADING,
  };
};

const searchMoviesSuccess = (movies) => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

const searchMoviesFailure = (error) => {
  return {
    type: SEARCH_MOVIES_FAILURE,
    payload: error,
  };
};
// <! -------searching movies ----->


export const setCurrentPageNumber = (number) => {
  return {
    type: SET_PAGE_NUMBER,
    payload: number,
  };
};

export const searchQuery = (query) => {
  return {
    type : SEARCH_QUERY,
    payload : query
  }
}

export const searchMovies = (query, pageNumber) => {
  return (dispatch) => {
    const getData = async () => {
      try {
        dispatch(searchMoviesLoading());
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${pageNumber}`
        );
        dispatch(searchMoviesSuccess(data));
      } catch (err) {
        dispatch(searchMoviesFailure(err?.message));
      }
    };

    getData(query, pageNumber);
  };
};

export const fetchMovies = (pageNumber) => {
  return (dispatch) => {
    const getData = async () => {
      try {
        dispatch(fetchMoviesLoading());
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`
        );
        dispatch(fetchMoviesSuccess(data));
      } catch (err) {
        dispatch(fetchMoviesFailure(err?.message));
      }
    };

    getData(pageNumber);
  };
};

export const fetchSingleMovie = (movie_id) => {
  return (dispatch) => {
    const getData = async () => {
      try {
        dispatch(fetchSingleMoviesLoading());
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
        );
        dispatch(fetchSingleMoviesSuccess(data));
      } catch (err) {
        dispatch(fetchSingleMoviesFailure(err?.message));
      }
    };

    getData(movie_id);
  };
};
