import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Genres from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
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
    lastGenreID: 1,
  },
});
const dataActive = {
  title: 'Genres',
  activeClass: 'active',
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
};

const shallow = new ShallowRenderer();
describe('Genres Snapshot', () => {
  it('renders', () => {
    const component = shallow.render(
      <Provider store={store}>
        <Genres {...dataActive} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown open', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Genres {...dataActive} />
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('renders genres dropdown close', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Genres {...dataActive} />
      </Provider>,
    );
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    component.root.findByProps({ className: 'moviesGrid_categories_item_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });
});
