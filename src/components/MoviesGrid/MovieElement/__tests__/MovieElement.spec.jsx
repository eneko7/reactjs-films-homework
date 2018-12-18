import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import MovieElement from '../MovieElement';

const data = {
  film: {
    backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
    genre_ids: [18, 10751, 14],
    title: 'original_title',
    poster_path: '/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg',
    overview: 'overview',
    vote_average: 8,
    id: 338952,
  },
  genresList: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
  ],
};

const dataBadPictures = {
  film: {
    backdrop_path: null,
    genre_ids: [18, 10751, 14],
    title: 'original_title',
    poster_path: null,
    overview: 'overview',
    vote_average: 8,
    id: 338952,
  },
  genresList: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
  ],
};

const dataBadPicturePoster = {
  film: {
    backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
    genre_ids: [18, 10751, 14],
    title: 'original_title',
    poster_path: null,
    overview: 'overview',
    vote_average: 8,
    id: 338952,
  },
  genresList: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
  ],
};

const dataBadPictureTop = {
  film: {
    backdrop_path: null,
    genre_ids: [18, 10751, 14],
    title: 'original_title',
    poster_path: '/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg',
    overview: 'overview',
    vote_average: 8,
    id: 338952,
  },
  genresList: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
  ],
};

jest.mock('../ModalWindowFilm/ModalWindowFilmContainer', () => () => <div>test</div>);

describe('MovieElement', () => {
  // const rendererShallow = new ShallowRenderer();
  it('renders correctly', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('renders correctly without all pictures', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...dataBadPictures}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('renders correctly without poster', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...dataBadPicturePoster}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('renders correctly without top picture', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...dataBadPictureTop}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (show info) ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'button_show_info' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (close info) ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'button_show_info' }).props.onClick();
    output.root.findByProps({ className: 'descriptionFilmLayer_info_close' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (watch film) ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (close film) ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> from films ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/films?sort=Top%20Rated']}>
        <MovieElement
          {...data}
          location={{ pathname: '/films', search: 'sort=Top%20Rated' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'moviesGrid_wrapper_MovieElement_ul_item_wrap' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> from search ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/search?q=Test']}>
        <MovieElement
          {...data}
          location={{ pathname: '/search', search: 'q=Test' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'moviesGrid_wrapper_MovieElement_ul_item_wrap' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> from film ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/film?filmId=278']}>
        <MovieElement
          {...data}
          location={{ pathname: '/film', search: 'filmId=278' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'moviesGrid_wrapper_MovieElement_ul_item_wrap' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> from index ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <MovieElement
          {...data}
          location={{ pathname: '/', search: '' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'moviesGrid_wrapper_MovieElement_ul_item_wrap' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> from genres ', () => {
    const output = renderer.create(
      <MemoryRouter initialEntries={['/genres?genreName=Action&genreId=1']}>
        <MovieElement
          {...data}
          location={{ pathname: '/genres', search: 'genreName=Action&genreId=1' }}
          history={{ push: () => ('Hello') }}
          receiveMainFilmInfo={() => ('Hello')}
        />
      </MemoryRouter>,
    );
    output.root.findByProps({ className: 'moviesGrid_wrapper_MovieElement_ul_item_wrap' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
