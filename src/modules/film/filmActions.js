import axios from 'axios';

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_ERROR = 'FETCH_FILM_ERROR';

export const receiveFilmSuccess = payload => ({
  type: FETCH_FILM_SUCCESS,
  payload,
});

export const receiveFilmRequest = () => ({
  type: FETCH_FILM_REQUEST,
});

export const receiveFilmError = payload => ({
  type: FETCH_FILM_ERROR,
  payload,
});

export function fetchFilm(filmId) {
  return (dispatch) => {
    dispatch(receiveFilmRequest());
    return axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=6a08c0def237c5910708279c9ee78cc5`)
      .then((response) => {
        dispatch(receiveFilmSuccess(response.data.results[0].key));
      })
      .catch(error => dispatch(receiveFilmError(error.message)));
  };
}
