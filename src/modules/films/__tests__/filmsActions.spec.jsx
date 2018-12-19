import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../filmsActions';
import getFilmMock from '../../mocks/getFilmMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success FETCH_FILMS', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILMS_SUCCESS, payload: { films: [getFilmMock], url: 'https://api.themoviedb.org/', page: 1 } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilms('https://api.themoviedb.org/'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch popular films', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: actions.urlPopularFilms, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsPopular());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch top rated films', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: actions.urlTopRatedFilms, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsTopRated());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch coming soon films', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: actions.urlComingSoonFilms, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsComingSoon());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch films by genres', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: `${actions.urlByGenreFilms}&with_genres=${28}`, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsByGenre(28));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch searching films', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: `${actions.urlBySearchFilms}&query=word`, page: 1,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsBySearch('word'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch next films for search', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_SUCCESS,
        payload: {
          films: [getFilmMock], url: actions.urlBySearchFilms, page: 2,
        },
      },
    ];

    const store = mockStore({ films: { url: actions.urlBySearchFilms, lastPage: 1 } });

    store.dispatch(actions.fetchNextFilms());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch next films for search next page', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: {
        results: [getFilmMock],
      },
    });

    const expectedActions = [];

    const store = mockStore({ films: { url: actions.urlBySearchFilms, lastPage: -1 } });

    store.dispatch(actions.fetchNextFilms());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('failed fetch films', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilms('https://api.themoviedb.org/'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
