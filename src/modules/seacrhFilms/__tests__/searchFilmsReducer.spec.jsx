import reducer from '../seacrhFilmsReducer';
import * as actions from '../searchFilmsActions';

const mockWord = 'word';
const initialState = {
  searchedWord: '',
};

describe('SearchFilms Reducer', () => {
  it('save searching word', () => {
    expect(reducer(initialState, {
      type: actions.SAVE_SEARCHING_WORD,
      payload: mockWord,
    }))
      .toEqual({
        ...initialState,
        searchedWord: mockWord,
      });
  });
  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
