import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import * as filmActions from '../../../../../modules/film/filmActions';
import ModalWindowFilm from '../index';

const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  film: {
    filmTrailerKey: 'word',
  },
});
const data = {
  filmId: 1562,
  onChange: () => ('Hello'),
};

describe('Search Snapshot', () => {
  test('snapshot render', () => {
    const component = shallow.render(
      <Provider store={store}>
        <ModalWindowFilm {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
