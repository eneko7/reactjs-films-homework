
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import getFilmsSearchMock from '../../../../modules/mocks/getFilmsSearchMock';
import * as searchFilmsActions from '../../../../modules/seacrhFilms/searchFilmsActions';
import HeaderTop from '../index';

const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  search: {
    searchedWord: 'word',
  },
});
const store2 = mockStore({
  search: {
    searchedWord: '',
  },
});
const location = {
  location: {
    pathname: '/search',
    search: '/search?q=test',
  },
};
describe('Search Snapshot', () => {
  test('snapshot render', () => {
    const component = shallow.render(
      <Provider store={store}>
        <MemoryRouter {...location}>
          <HeaderTop />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
jest.mock('../../../../modules/films/filmsActions',
  () => ({
    fetchFilmsBySearch: jest.fn(() => ({ type: 'FETCH_FILMS_REQUEST' })),
    fetchFilmsPopular: jest.fn(() => ({ type: 'FETCH_FILMS_REQUEST' })),
  }));
describe('Header top save word', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('dispatch save word', (done) => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter {...location}>
          <HeaderTop />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            return {
              value: 'word',
            };
          }
          return null;
        },
      },
    );
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: '',
    });

    const expectedActions = [
      { type: 'FETCH_FILMS_REQUEST' },
      { type: searchFilmsActions.SAVE_SEARCHING_WORD, payload: 'word' },
    ];

    const { root } = testRenderer;
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    root.findByProps({ className: 'header_top_search_input' }).props.onChange(event);
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
describe('Header top save word -> click', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('dispatch save word -> Click (search button)', (done) => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter {...location}>
          <HeaderTop />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            // mock a focus function
            return {
              value: 'word',
            };
          }
          return null;
        },
      },
    );
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmsSearchMock.results,
    });
    const expectedActions = [
      { type: 'FETCH_FILMS_REQUEST' },
      { type: searchFilmsActions.SAVE_SEARCHING_WORD, payload: 'word' },
    ];

    const { root } = testRenderer;
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    root.findByProps({ className: 'header_top_search_label' }).props.onClick(event);
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
describe('Header top save word without word', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('dispatch without word', (done) => {
    const testRenderer = TestRenderer.create(
      <Provider store={store2}>
        <MemoryRouter {...location}>
          <HeaderTop />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            // mock a focus function
            return {
              value: '',
            };
          }
          return null;
        },
      },
    );
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: '',
    });

    const expectedActions = [
    ];

    const { root } = testRenderer;
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    root.findByProps({ className: 'header_top_search_input' }).props.onChange(event);
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
