import reducer from '../filmReducer';
import * as actions from '../filmActions';

const initialState = {
  filmTrailer: '',
  errorFilm: false,
  isFetchingFilm: false,
  isFetchedFilm: false,
  selectedFilm: null,
};

describe('Film Reducers', () => {
  it('fetch film succeed', () => {
    expect(reducer(initialState, actions.receiveFilmSuccess(true)))
      .toEqual({
        isFetchingFilm: false,
        isFetchedFilm: true,
        filmTrailer: true,
        errorFilm: false,
        selectedFilm: null,
      });
  });
  it('fetch film succeed', () => {
    expect(reducer(initialState, actions.receiveFilmInfoSuccess(true)))
      .toEqual({
        ...initialState,
        isFetchingFilm: false,
        isFetchedFilm: true,
        selectedFilm: true,
        errorFilm: false,
      });
  });
  it('fetch film request', () => {
    expect(reducer(initialState, actions.receiveFilmRequest()))
      .toEqual({
        ...initialState,
        isFetchingFilm: true,
        isFetchedFilm: false,
      });
  });
  it('fetch film error', () => {
    expect(reducer(initialState, actions.receiveFilmError(true)))
      .toEqual({
        errorFilm: true,
        isFetchingFilm: false,
        isFetchedFilm: false,
        filmTrailer: '',
        selectedFilm: null,
      });
  });
  it('without any actions', () => {
    expect(reducer(initialState, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
