import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as searchFilmsActions from '../../../../modules/seacrhFilms/searchFilmsActions';
import * as filmsActions from '../../../../modules/films/filmsActions';
import HeaderTop from '../index';

const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  search: {
    searchedWord: 'word',
  },
});

describe('Search Snapshot', () => {
  test('snapshot render', () => {
    const component = shallow.render(
      <Provider store={store}>
        <HeaderTop />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
  test('dispatch save word', (done) => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <HeaderTop />
      </Provider>,
    );
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: '',
    });
    const e = {
      target: {
        value: 'word',
      },
    };

    const expectedActions = [
      { type: searchFilmsActions.SAVE_SEARCHING_WORD, payload: 'word' },
      { type: filmsActions.FETCH_FILMS_REQUEST },
    ];

    const { root } = testRenderer;
    root.findByProps({ className: 'header_top_search_input' }).props.onChange(e);
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
