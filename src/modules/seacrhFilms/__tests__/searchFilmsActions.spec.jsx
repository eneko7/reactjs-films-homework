import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../searchFilmsActions';
import * as filmsActions from '../../films/filmsActions';
import * as actionsFilm from '../../film/filmActions';
import getFilmsMock from '../../mocks/getFilmsMock';
import {
  urlBySearchFilms,
} from '../../utils/constants';

jest.mock('../../film/filmActions', () => ({
  receiveMainFilmInfo: jest.fn(() => ({ type: 'FETCH_FILM_REQUEST' })),
  FETCH_FILM_REQUEST: 'FETCH_FILM_REQUEST',
}));
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
          url: `${urlBySearchFilms}&query=${mockWord}`,
        },
      },
      { type: actionsFilm.FETCH_FILM_REQUEST },
    ];

    const store = mockStore({});

    store.dispatch(actions.searchFilm(mockWord));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
