import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../navlinksActions';
import * as filmsActions from '../../films/filmsActions';
import * as actionsFilm from '../../film/filmActions';
import getFilmsMock from '../../mocks/getFilmsMock';
import {
  urlPopularFilms,
} from '../../utils/constants';

jest.mock('../../film/filmActions', () => ({
  receiveMainFilmInfo: jest.fn(() => ({ type: 'FETCH_FILM_REQUEST' })),
  FETCH_FILM_REQUEST: 'FETCH_FILM_REQUEST',
}));
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('navLink actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('push navigation link', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmsMock,
    });

    const expectedActions = [
      { type: actions.PUSH_NAVIGATION_LINK, payload: 'Trending' },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      {
        type: filmsActions.FETCH_FILMS_SUCCESS,
        payload: {
          films: getFilmsMock.results, url: urlPopularFilms, page: 1,
        },
      },
      { type: actionsFilm.FETCH_FILM_REQUEST },
    ];

    const store = mockStore({});

    store.dispatch(actions.pushNavigationLink('Trending'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
