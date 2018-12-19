import * as selectors from '../genresSelectors';

const initialState = {
  allGenres: [],
  errorGenres: {},
  isFetchingGenres: false,
  isFetchedGenres: false,
  lastGenreID: 0,
};
describe('Genres Selectors', () => {
  const state = {
    genres: initialState,
  };
  it('getGenres selector', () => {
    expect(selectors.getGenres(state))
      .toEqual(state.genres.allGenres);
  });
  it('getGenresId selector', () => {
    expect(selectors.getGenresId(state))
      .toEqual(state.genres.lastGenreID);
  });
});
