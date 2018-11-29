import React from 'react';
// import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as actions from '../../../../../modules/film/filmActions';
import getFilmMock from '../../../../../modules/mocks/getFilmMock';
import ModalWindowFilm from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  film: {
    filmTrailerKey: 'key',
  },
});
const shallow = new ShallowRenderer();
const data = {
  filmId: 1,
  onChange: () => ('Hello!'),
};
const dataFailId = {
  filmId: '',
  onChange: () => ('Hello!'),
};
describe('ModalWindowFilm Snapshot', () => {
  it('renders with trailer', () => {
    const component = shallow.render(
      <Provider store={store}>
        <ModalWindowFilm {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
describe('fetchFilm actions', () => {
  it('renders with trailer', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <ModalWindowFilm {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_FILM_SUCCESS after successfuly fetching film', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getFilmMock,
      });
    });
    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: actions.FETCH_FILM_SUCCESS, payload: getFilmMock.results[0].key },
    ];
    return store.dispatch(actions.fetchFilm()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('fetchFilm actions', () => {
  it('renders with trailer', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <ModalWindowFilm {...dataFailId} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_FILM_SUCCESS after faild fetching film', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: '',
      });
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: actions.FETCH_FILM_ERROR, payload: "Cannot read property '0' of undefined" },
    ];

    return store.dispatch(actions.fetchFilm()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
