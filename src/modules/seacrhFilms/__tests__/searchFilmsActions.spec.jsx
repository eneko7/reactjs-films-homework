import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../searchFilmsActions';
import * as filmsActions from '../../films/filmsActions';
import getFilmsMock from '../../mocks/getFilmsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockWord = 'word';

describe('searchFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());
  it('save searching word', (done) => {
    const expectedActions = [
      { type: actions.SAVE_SEARCHING_WORD, payload: mockWord },
    ];

    const store = mockStore({});

    store.dispatch(actions.saveSearchingWord(mockWord));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('search film', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmsMock,
    });

    const expectedActions = [
      { type: filmsActions.FETCH_FILMS_REQUEST },
      {
        type: filmsActions.FETCH_FILMS_SUCCESS,
        payload: {
          films: getFilmsMock.results,
          page: 1,
          url: `${filmsActions.urlBySearchFilms}&query=${mockWord}`,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.searchFilm(mockWord));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
