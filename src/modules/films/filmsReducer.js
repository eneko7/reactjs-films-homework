import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR,
} from './filmsActions';

const initialState = {
  allFilms: [],
  errorFilms: {},
  isFetchingFilms: false,
  isFetchedFilms: false,
  url: '',
  lastPage: null,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isFetchingFilms: false,
        isFetchedFilms: true,
        allFilms: action.payload.page === 1
          ? action.payload.films
          : state.allFilms.concat(action.payload.films),
        url: action.payload.url,
        lastPage: action.payload.page,
        errorFilms: '',
      };
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        isFetchingFilms: true,
        isFetchedFilms: false,
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        errorFilms: action.payload,
        isFetchingFilms: false,
        isFetchedFilms: false,
        allFilms: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmsReducer;
