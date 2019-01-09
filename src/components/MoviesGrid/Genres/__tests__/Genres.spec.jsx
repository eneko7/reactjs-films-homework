import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Provider } from 'react-redux';
import getGenresMock from '../../../../modules/mocks/getGenresMock';
import getFilmsMock from '../../../../modules/mocks/getFilmsMock';
import * as actionsGenres from '../../../../modules/genres/genresActions';
import Genres from '../index';
import GenresComponent from '../Genres';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  films: {
    allFilms: getFilmsMock.results,
    isFetchingFilms: false,
  },
  navlinks: {
    clickedLink: 'Trending',
  },
  genres: {
    allGenres: [
      {
        id: 1,
        name: 'adventure',
      },
      {
        id: 2,
        name: 'action',
      },
      {
        id: 3,
        name: 'drama',
      },
    ],
    errorGenres: {},
    isFetchingGenres: false,
    isFetchedGenres: false,
    lastGenreID: 1,
  },
});

describe('GenresNavLink Snapshot', () => {
  test('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Genres title="Genres" activeCategory="Trending" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  test('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/genres?genreName=Action&genreId=1']}>
          <Genres title="Genres" activeCategory="Genres" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
jest.mock('../../../../modules/films/filmsActions',
  () => ({
    fetchGenres: jest.fn(() => ({ type: 'FETCH_GENRES_REQUEST' })),
    fetchFilmsByGenre: jest.fn(() => ({ type: 'FETCH_FILMS_REQUEST' })),
  }));
describe('Genres logic', () => {
  it('renders genres dropdown open', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Genres title="Genres" activeCategory="Genres" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown close', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Genres title="Genres" activeCategory="Trending" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown chose 1', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Genres title="Genres" activeCategory="Genres" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    const { root } = component;
    root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown chose 2', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Genres title="Genres" activeCategory="Trending" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
        </MemoryRouter>
      </Provider>,
    );
    const { root } = component;
    root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates GET_GENRES_SUCCESS after successfuly fetching genres', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getGenresMock,
      });
    });
    const expectedActions = [
      { type: actionsGenres.FETCH_GENRES_REQUEST },
      { type: actionsGenres.FETCH_GENRES_SUCCESS, payload: getGenresMock.genres },
    ];
    return store.dispatch(actionsGenres.fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('render correctly componentDidUpdate', () => {
    const node = document.createElement('div');
    const data = {
      fetchGenres: () => {},
      fetchChange: () => {},
      fetchFilmsByGenre: () => {},
      genres: [
        {
          id: 1,
          name: 'adventure',
        },
        {
          id: 2,
          name: 'action',
        },
        {
          id: 3,
          name: 'drama',
        },
      ],
      title: 'Comedy',
      activeCategory: 'Genres',
    };
    const instance = React.createRef();
    ReactDOM.render(<MemoryRouter><GenresComponent ref={instance} location={{ pathname: '/genres', search: 'genreName=Comedy&genreId=35' }} {...data} /></MemoryRouter>, node);
    const changeTitle = jest.spyOn(instance.current, 'changeTitle');
    ReactDOM.render(<MemoryRouter><GenresComponent location={{ pathname: '/genres', search: 'genreName=Documentary&genreId=99' }} {...data} /></MemoryRouter>, node);
    expect(changeTitle).toHaveBeenCalledTimes(1);
  });
  it('render correctly componentDidUpdate', () => {
    const node = document.createElement('div');
    const data = {
      fetchGenres: () => {},
      fetchChange: () => {},
      fetchFilmsByGenre: () => {},
      genres: [
        {
          id: 1,
          name: 'adventure',
        },
        {
          id: 2,
          name: 'action',
        },
        {
          id: 3,
          name: 'drama',
        },
      ],
      title: 'Comedy',
      activeCategory: 'Genres',
    };
    const instance = React.createRef();
    ReactDOM.render(<MemoryRouter><GenresComponent ref={instance} location={{ pathname: '/genres', search: 'genreName=Comedy&genreId=35' }} {...data} /></MemoryRouter>, node);
    const changeTitle = jest.spyOn(instance.current, 'changeTitle');
    ReactDOM.render(<MemoryRouter><GenresComponent location={{ pathname: '/films', search: 'sort=Top%20Rated' }} {...data} /></MemoryRouter>, node);
    expect(changeTitle).toHaveBeenCalledTimes(0);
  });
});
