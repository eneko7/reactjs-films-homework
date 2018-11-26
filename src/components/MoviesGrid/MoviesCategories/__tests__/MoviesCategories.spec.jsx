import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MoviesCategories from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
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
    lastGenreID: 1,
  },
});
jest.mock('../../Genres/GenresContainer', () => () => <div>test</div>);
const shallow = new ShallowRenderer();
describe('MoviesCategories Snapshot', () => {
  it('renders', () => {
    const component = shallow.render(
      <Provider store={store}>
        <MoviesCategories />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders categories', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesCategories />
      </Provider>,
    );
    const elArr = ['Trending', 'Top Rated', 'Coming Soon'];
    elArr.map(el => component.root.findByProps({ 'data-filter': el }).props.onClick(el));
    expect(component).toMatchSnapshot();
  });

  it('renders genres', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesCategories />
      </Provider>,
    );
    const { instance } = component.root;
    const el = 'Genres';
    instance.setState(() => ({
      activeCategory: el,
    }));
    component.root.findByProps({ 'data-filter': el }).props.onClick(el);
    expect(component).toMatchSnapshot();
  });
});
