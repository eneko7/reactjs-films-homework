import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../filmActions';
import getFilmMock from '../../mocks/getFilmMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilm actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success fetch film', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmMock,
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: actions.FETCH_FILM_SUCCESS, payload: getFilmMock.results[0].key },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilm(335983));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('failed fetch film', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      {
        type: actions.FETCH_FILM_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilm(335983));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch main film', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmMock,
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: actions.FETCH_FILM_INFO_SUCCESS, payload: getFilmMock },
    ];

    const store = mockStore({});

    store.dispatch(actions.receiveMainFilmInfo(335983));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('failed fetch main film', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      {
        type: actions.FETCH_FILM_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.receiveMainFilmInfo(335983));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
