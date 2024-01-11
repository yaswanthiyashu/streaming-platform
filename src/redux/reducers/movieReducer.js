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
  SET_TOTAL_PAGE_NUMBER,
  SEARCH_QUERY
} from "../types/movieTypes";

const intialState = {
  moviesList: [],
  singleMovie: {},
  totalPages : 0,
  currentPageNumber : 1,
  isLoading: false,
  hasError: false,
  error: "",
  searchList: [],
  isSearching: false,
  query : ''
};

export const movieReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        isLoading: true,
        isSearching: false,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesList: actions.payload.results,
        totalPages : actions.payload.total_pages
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: actions.payload,
      };
      case FETCH_SINGLE_MOVIES_LOADING:
      return {
        ...state,
        isLoading: true,
        isSearching: false,
      };

    case FETCH_SINGLE_MOVIES_SUCCESS:
      console.log(actions.payload);
      return {
        ...state,
        isLoading: false,
        singleMovie: actions.payload,
      };

    case FETCH_SINGLE_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: actions.payload,
      };
    case SEARCH_MOVIES_LOADING:
      return {
        ...state,
        isLoading: true,
        moviesList : [],
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchList: actions.payload.results,
        totalPages: actions.payload.total_pages
      };

    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: actions.payload,
      };

    case SET_PAGE_NUMBER: 
      return {
        ...state,
        currentPageNumber : actions.payload
      }
      case SET_TOTAL_PAGE_NUMBER: 
      return {
        ...state,
        currentPageNumber : actions.payload
      }
    
      case SEARCH_QUERY:
        return {
          ...state,
          isSearching : true,
          query : actions.payload
        }
    default:
      return state;
  }
};
