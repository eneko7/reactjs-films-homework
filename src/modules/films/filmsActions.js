import axios from 'axios';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';
export const CLEAN_FILMS = 'CLEAN_FILMS';

export const urlPopularFilms = 'https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5';
export const urlTopRatedFilms = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5';
export const urlComingSoonFilms = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5';
export const urlByGenreFilms = 'https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5&sort_by=vote_average.desc&vote_count.gte=100';
export const urlBySearchFilms = 'https://api.themoviedb.org/3/search/movie?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5&include_adult=false';

export const receiveFilmsSuccess = payload => ({
  type: FETCH_FILMS_SUCCESS,
  payload,
});

export const receiveFilmsRequest = () => ({
  type: FETCH_FILMS_REQUEST,
});

export const receiveFilmsError = payload => ({
  type: FETCH_FILMS_ERROR,
  payload,
});

export const cleanFilms = () => ({
  type: CLEAN_FILMS,
});

export function fetchFilms(url, page = 1) {
  return (dispatch) => {
    dispatch(receiveFilmsRequest());
    axios.get(`${url}&page=${page}`)
      .then((response) => {
        dispatch(receiveFilmsSuccess({ films: response.data.results, url, page }));
      })
      .catch(error => dispatch(receiveFilmsError(error.message)));
  };
}

export function fetchFilmsPopular() {
  return (dispatch) => {
    dispatch(fetchFilms(urlPopularFilms));
  };
}

export function fetchFilmsTopRated() {
  return (dispatch) => {
    dispatch(fetchFilms(urlTopRatedFilms));
  };
}

export function fetchFilmsComingSoon() {
  return (dispatch) => {
    dispatch(fetchFilms(urlComingSoonFilms));
  };
}

export function fetchFilmsByGenre(genreID) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlByGenreFilms}&with_genres=${genreID}`));
  };
}

export function fetchFilmsBySearch(word) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlBySearchFilms}&query=${word}`));
  };
}

export function fetchNextFilms() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.films.lastPage !== -1) {
      dispatch(fetchFilms(
        state.films.url,
        state.films.lastPage + 1,
      ));
    }
  };
}
