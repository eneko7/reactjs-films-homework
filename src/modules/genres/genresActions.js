import axios from 'axios';

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR';

export const urlGetGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6a08c0def237c5910708279c9ee78cc5&language=en-US';

export const receiveGenresSuccess = payload => ({
  type: FETCH_GENRES_SUCCESS,
  payload,
});

export const receiveGenresRequest = () => ({
  type: FETCH_GENRES_REQUEST,
});

export const receiveGenresError = payload => ({
  type: FETCH_GENRES_ERROR,
  payload,
});

export function fetchGenres() {
  return (dispatch) => {
    dispatch(receiveGenresRequest());
    axios.get(urlGetGenres)
      .then((response) => {
        dispatch(receiveGenresSuccess(response.data.genres));
      })
      .catch(error => dispatch(receiveGenresError(error.message)));
  };
}
