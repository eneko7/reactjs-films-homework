import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../genresActions';
import getGenresMock from '../../mocks/getGenresMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success fetch genres', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: { genres: getGenresMock },
    });

    const expectedActions = [
      { type: actions.FETCH_GENRES_REQUEST },
      { type: actions.FETCH_GENRES_SUCCESS, payload: getGenresMock },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchGenres(actions.urlGenresRequest));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('failed fetch genres', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_GENRES_REQUEST },
      {
        type: actions.FETCH_GENRES_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchGenres(actions.urlGenresRequest));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
