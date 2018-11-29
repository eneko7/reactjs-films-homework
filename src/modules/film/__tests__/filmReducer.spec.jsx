import reducer from '../filmReducer';
import * as actions from '../filmActions';

const initialState = {
  filmTrailer: '',
  errorFilm: false,
  isFetchingFilm: false,
  isFetchedFilm: false,
};
describe('Film Reducers', () => {
  it('fetch film succeed', () => {
    expect(reducer(initialState, actions.receiveFilmSuccess(true)))
      .toEqual({
        isFetchingFilm: false,
        isFetchedFilm: true,
        filmTrailer: true,
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
