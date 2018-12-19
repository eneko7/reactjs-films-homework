import getSearchingWord from '../searchFilmsSelectors';

const initialState = {
  searchedWord: '',
};

describe('SearchFilms Selectors', () => {
  const state = {
    search: initialState,
  };
  it('getSearchingWord selector', () => {
    expect(getSearchingWord(state))
      .toEqual(state.search.searchedWord);
  });
});
