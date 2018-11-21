import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import * as genresActions from '../../../modules/genres/genresActions';
// import * as filmsActions from '../../../modules/films/filmsActions';
import Header from '../index';

const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  films: {
    allFilms: [],
  },
  genres: {
    allGenres: [],
  },
});

describe('Header', () => {
  test('snapshot render', () => {
    const component = shallow.render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
