import * as selectors from '../filmSelectors';

describe('Film Selectors', () => {
  const initialState = {
    filmTrailer: '',
    errorFilm: false,
    isFetchingFilm: false,
    isFetchedFilm: false,
  };
  const state = {
    film: initialState,
  };
  it('getFilmTrailerKey selector', () => {
    expect(selectors.getFilmTrailerKey(state))
      .toEqual(state.film.filmTrailer);
  });
  it('getIsFetchingFilm selector', () => {
    expect(selectors.getIsFetchingFilm(state))
      .toEqual(state.film.isFetchingFilm);
  });
  it('getIsErrorFilm selector', () => {
    expect(selectors.getIsErrorFilm(state))
      .toEqual(state.film.errorFilm);
  });
});
