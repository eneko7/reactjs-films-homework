import React from 'react';
import { MemoryRouter } from 'react-router';
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
const location = {
  location: {
    pathname: '/films',
    search: '/films?sort=Trending',
  },
};
jest.mock('../../Genres/GenresContainer', () => () => <div>test</div>);
describe('MoviesCategories Snapshot', () => {
  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MoviesCategories fetchFilmsBySearch={() => ('Hello!')} />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search?q=Test']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/search', search: 'q=Test' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/genres?genreName=Action&genreId=28']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/genres', search: 'genreName=Action&genreId=28' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=278']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=278' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=278&category=categories&sort=Top%20Rated']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=278&category=categories&sort=Top%20Rated' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=278&category=categories&sort=Trending']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=278&category=categories&sort=Trending' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=278&category=categories&sort=Coming%20Soon']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=278&category=categories&sort=Coming%20Soon' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=416786&category=']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=416786&category=' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=155&category=genres&genreName=Action&genreId=28']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=155&category=genres&genreName=Action&genreId=28' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/film?filmId=401123&category=search&q=test']}>
          <MoviesCategories
            fetchFilmsBySearch={() => ('Hello!')}
            location={{ pathname: '/film', search: 'filmId=401123&category=search&q=test' }}
            history={{ push: () => ('Hello') }}
            receiveMainFilmInfo={() => ('Hello')}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders categories', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter {...location}>
          <MoviesCategories fetchFilmsBySearch={() => ('Hello!')} />
        </MemoryRouter>
      </Provider>,
    );
    const elArr = ['Trending', 'Top Rated', 'Coming Soon'];
    elArr.map(el => component.root.findByProps({ 'data-filter': el }).props.onClick(el));
    expect(component).toMatchSnapshot();
  });

  it('renders genres', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter {...location}>
          <MoviesCategories fetchFilmsBySearch={() => ('Hello!')} />
        </MemoryRouter>
      </Provider>,
    );
    const { instance } = component.root;
    const el = 'Genres';
    instance.setState(() => ({
      activeCategory: el,
    }));
    expect(component).toMatchSnapshot();
  });
});
