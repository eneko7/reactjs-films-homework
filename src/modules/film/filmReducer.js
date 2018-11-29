import {
  FETCH_FILM_REQUEST,
  FETCH_FILM_SUCCESS,
  FETCH_FILM_ERROR,
} from './filmActions';

const initialState = {
  filmTrailer: '',
  errorFilm: false,
  isFetchingFilm: false,
  isFetchedFilm: false,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_SUCCESS:
      return {
        ...state,
        isFetchingFilm: false,
        isFetchedFilm: true,
        filmTrailer: action.payload,
        errorFilm: false,
      };
    case FETCH_FILM_REQUEST:
      return {
        ...state,
        isFetchingFilm: true,
        isFetchedFilm: false,
      };
    case FETCH_FILM_ERROR:
      return {
        ...state,
        errorFilm: true,
        isFetchingFilm: false,
        isFetchedFilm: false,
        filmTrailer: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmReducer;
