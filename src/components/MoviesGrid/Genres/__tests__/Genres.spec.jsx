import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Provider } from 'react-redux';
import getGenresMock from '../../../../modules/mocks/getGenresMock';
import getFilmsMock from '../../../../modules/mocks/getFilmsMock';
import * as actionsGenres from '../../../../modules/genres/genresActions';
import Genres from '../index';

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

const shallow = new ShallowRenderer();
describe('GenresNavLink Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <Provider store={store}>
        <Genres title="Genres" activeClass="undefined" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
  test('renders', () => {
    const component = shallow.render(
      <Provider store={store}>
        <Genres title="Genres" activeClass="active" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
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
        <Genres title="Genres" activeClass="active" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown close', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Genres title="Genres" activeClass="undefined" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown chose', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Genres title="Genres" activeClass="active" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
      </Provider>,
    );
    const { root } = component;
    root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    root.findByProps({ id: 'genres_list' }).children[0].props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown chose', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Genres title="Genres" activeClass="undefined" fetchChange={() => ('Hello')} fetchFilmsByGenre={() => ('Hello')} />
      </Provider>,
    );
    const { root } = component;
    root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    root.findByProps({ id: 'genres_list' }).children[0].props.onClick();
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
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
