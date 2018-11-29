import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../navlinksActions';
import * as filmsActions from '../../films/filmsActions';
import getFilmsMock from '../../mocks/getFilmsMock';

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
          films: getFilmsMock.results, url: filmsActions.urlPopularFilms, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.pushNavigationLink('Trending'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
