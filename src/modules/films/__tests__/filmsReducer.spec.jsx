import reducer from '../filmsReducer';
import * as actions from '../filmsActions';

const initialState = {
  allFilms: [],
  errorFilms: {},
  isFetchingFilms: false,
  isFetchedFilms: false,
  url: '',
  lastPage: null,
};

const mockData = { page: 1, films: [{ id: 442249 }] };
const mockData2 = { page: 2, films: [{ id: 442249 }] };

describe('Films Reducers', () => {
  it('fetch films succeed', () => {
    expect(reducer(initialState, actions.receiveFilmsSuccess(mockData)))
      .toEqual({
        isFetchingFilms: false,
        isFetchedFilms: true,
        allFilms: mockData.films,
        url: undefined,
        lastPage: 1,
        errorFilms: '',
      });
  });
  it('fetch films succeed the second page', () => {
    expect(reducer(initialState, actions.receiveFilmsSuccess(mockData2)))
      .toEqual({
        isFetchingFilms: false,
        isFetchedFilms: true,
        allFilms: mockData2.films,
        url: undefined,
        lastPage: 2,
        errorFilms: '',
      });
  });
  it('fetch films request', () => {
    expect(reducer(initialState, actions.receiveFilmsRequest()))
      .toEqual({
        ...initialState,
        isFetchingFilms: true,
        isFetchedFilms: false,
      });
  });
  it('fetch films error', () => {
    expect(reducer(initialState, actions.receiveFilmsError(true)))
      .toEqual({
        ...initialState,
        errorFilms: true,
        isFetchingFilms: false,
        isFetchedFilms: false,
        allFilms: [],
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
