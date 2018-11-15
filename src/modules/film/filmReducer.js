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
        filmTrailer: action.payload,
        errorFilm: false,
        isFetchingFilm: false,
        isFetchedFilm: true,
      };
    case FETCH_FILM_REQUEST:
      return {
        ...state,
        isFetchingFilms: true,
        isFetchedFilms: false,
      };
    case FETCH_FILM_ERROR:
      return {
        ...state,
        errorFilm: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmReducer;
