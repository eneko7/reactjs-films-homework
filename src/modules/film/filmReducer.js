import {
  FETCH_FILM_REQUEST,
  FETCH_FILM_SUCCESS,
  FETCH_FILM_ERROR,
  FETCH_FILM_INFO_SUCCESS,
} from './filmActions';

const initialState = {
  filmTrailer: '',
  errorFilm: false,
  isFetchingFilm: false,
  isFetchedFilm: false,
  selectedFilm: null,
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
    case FETCH_FILM_INFO_SUCCESS:
      return {
        ...state,
        isFetchingFilm: false,
        isFetchedFilm: true,
        selectedFilm: action.payload,
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
