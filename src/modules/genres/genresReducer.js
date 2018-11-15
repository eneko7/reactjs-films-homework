import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
} from './genresActions';

const initialState = {
  allGenres: [],
  errorGenres: {},
  isFetchingGenres: false,
  isFetchedGenres: false,
  lastGenreID: 0,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        allGenres: action.payload,
        errorGenres: {},
        isFetchingGenres: false,
        isFetchedGenres: true,
        lastGenreID: 0,
      };
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        isFetchingGenres: true,
        isFetchedGenres: false,
      };
    case FETCH_GENRES_ERROR:
      return {
        ...state,
        errorGenres: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default genresReducer;
