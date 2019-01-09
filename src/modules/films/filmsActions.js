/* eslint-disable max-len */
import axios from 'axios';
import { receiveMainFilmInfo } from '../film/filmActions';
import {
  urlPopularFilms,
  urlTopRatedFilms,
  urlComingSoonFilms,
  urlByGenreFilms,
  urlBySearchFilms,
} from '../utils/constants';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

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

export function fetchFilms(url, filmId, page = 1) {
  return (dispatch) => {
    dispatch(receiveFilmsRequest());
    return axios.get(`${url}&page=${page}`)
      .then((response) => {
        if (filmId) {
          dispatch(receiveFilmsSuccess({ films: response.data.results, url, page }));
          dispatch(receiveMainFilmInfo(filmId));
        } else {
          dispatch(receiveFilmsSuccess({ films: response.data.results, url, page }));
          dispatch(receiveMainFilmInfo(response.data.results[0].id));
        }
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

export function fetchFilmsByGenre(genreID, filmId) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlByGenreFilms}&with_genres=${genreID}`, filmId));
  };
}

export function fetchFilmsBySearch(word, filmId) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlBySearchFilms}&query=${word}`, filmId));
  };
}

export function fetchNextFilms(filmId) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.films.lastPage !== -1) {
      dispatch(fetchFilms(
        state.films.url,
        filmId,
        state.films.lastPage + 1,
      ));
    }
  };
}
