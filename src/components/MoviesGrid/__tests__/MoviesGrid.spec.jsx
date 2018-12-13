import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
// import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MoviesGrid from '../index';
import mockFilms from '../../../modules/mocks/getFilmsMock';
import mockGenres from '../../../modules/mocks/getGenresMock';
import * as filmsActions from '../../../modules/films/filmsActions';

jest.mock('../Genres', () => () => 'Genres');
jest.mock('../MoviesCategories', () => () => 'MoviesCategories');
const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  films: {
    allFilms: mockFilms.results,
    isFetchingFilms: false,
  },
  genres: {
    allGenres: mockGenres.genres,
    lastGenreID: 0,
  },
  navlinks: {
    clickedLink: 'Trending',
  },
  film: {
    filmTrailer: 'trailer',
    isFetchingFilm: false,
    errorFilm: false,
  },
});
describe('MoviesList Snapshot', () => {
  test('snapshot', () => {
    const component = shallow.render(
      <Provider store={store}>
        <MemoryRouter>
          <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
jest.mock('../../../modules/films/filmsActions',
  () => ({
    fetchNextFilms: jest.fn(() => ({ type: 'FETCH_NEXT_FILM' })),
    fetchGenres: jest.fn(() => ({ type: 'FETCH_GENRES_REQUEST' })),
    fetchFilmsPopular: jest.fn(() => ({ type: 'FETCH_FILMS_REQUEST' })),
  }));
jest.mock('../../../modules/navlinks/navlinksActions',
  () => ({
    pushNavigationLink: jest.fn(() => ({ type: 'PUSH_NAVIGATION_LINK' })),
  }));

describe('MoviesGrid logics', () => {
  afterEach(() => {
    filmsActions.fetchNextFilms.mockClear();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
  // test('dispatch genres and films loading after componentDidMount', (done) => {
  //   TestRenderer.create(
  //     <Provider store={store}>
  //       <MemoryRouter>
  //         <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
  //       </MemoryRouter>
  //     </Provider>,
  //   );
  //   moxios.stubRequest(/api.themoviedb.org/, {
  //     status: 200,
  //     response: { genres: mockGenres },
  //   });
  //   const expectedActions = [
  //     { type: 'PUSH_NAVIGATION_LINK' },
  //   ];

  //   moxios.wait(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //     done();
  //   });
  // });
  test('function for fetch next films should be called after scrolling', () => {
    const eventMap = {
      scroll: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    Object.defineProperty(global.window, 'innerHeight', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.window, 'pageYOffset', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.document.body, 'offsetHeight', {
      writable: true,
      value: 1,
    });
    TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
        </MemoryRouter>
      </Provider>,
    );
    eventMap.scroll();
    expect(filmsActions.fetchNextFilms).toBeCalled();
  });
  test("function for fetch next films shouldn't be called when films are fetching", () => {
    const store2 = mockStore({
      films: {
        allFilms: mockFilms.results,
        isFetchingFilms: true,
      },
      genres: {
        allGenres: mockGenres.genres,
        lastGenreID: 0,
      },
      film: {
        filmTrailer: 'trailer',
        isFetchingFilm: true,
        errorFilm: false,
      },
      navlinks: {
        clickedLink: 'Trending',
      },
    });
    const eventMap = {
      scroll: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    Object.defineProperty(global.window, 'innerHeight', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.window, 'pageYOffset', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.document.body, 'offsetHeight', {
      writable: true,
      value: 1,
    });
    TestRenderer.create(
      <Provider store={store2}>
        <MemoryRouter>
          <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
        </MemoryRouter>
      </Provider>,
    );
    eventMap.scroll();
    expect(filmsActions.fetchNextFilms).not.toBeCalled();
  });
  test("function for fetch next films shouldn't be called when films are fetching", () => {
    const store3 = mockStore({
      films: {
        allFilms: [],
        isFetchingFilms: true,
      },
      genres: {
        allGenres: mockGenres.genres,
        lastGenreID: 0,
      },
      film: {
        filmTrailer: 'trailer',
        isFetchingFilm: true,
        errorFilm: false,
      },
      navlinks: {
        clickedLink: 'Trending',
      },
    });
    const eventMap = {
      scroll: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    Object.defineProperty(global.window, 'innerHeight', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.window, 'pageYOffset', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.document.body, 'offsetHeight', {
      writable: true,
      value: 1,
    });
    TestRenderer.create(
      <Provider store={store3}>
        <MemoryRouter>
          <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
        </MemoryRouter>
      </Provider>,
    );
    eventMap.scroll();
    expect(filmsActions.fetchNextFilms).not.toBeCalled();
  });
  test('lifecycle method should have been called', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <MoviesGrid fetchFilmsByGenre={() => ('Hello')} fetchFilmsBySearch={() => ('hello')} />
        </MemoryRouter>
      </Provider>,
    );
    component.unmount();
  });
});
