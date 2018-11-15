import {
  fetchFilmsBySearch,
} from '../films/filmsActions';

export const SAVE_SEARCHING_WORD = 'SAVE_SEARCHING_WORD';


export const saveSearchingWord = payload => (dispatch) => {
  dispatch({
    type: SAVE_SEARCHING_WORD,
    payload,
  });
};

export const searchFilm = payload => (dispatch) => {
  if (payload !== '') {
    dispatch(fetchFilmsBySearch(payload));
  }
};
