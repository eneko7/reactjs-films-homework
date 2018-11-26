import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
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

const dataBadPicture = {
  film: {
    backdrop_path: '',
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

const dataBadPicturePoster = {
  film: {
    backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
    genre_ids: [18, 10751, 14],
    title: 'original_title',
    poster_path: '',
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
  const rendererShallow = new ShallowRenderer();
  it('renders correctly', () => {
    rendererShallow.render(<MovieElement {...data} />);
    const result = rendererShallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders correctly without top picture', () => {
    rendererShallow.render(<MovieElement {...dataBadPicture} />);
    const result = rendererShallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('MovieElement -> Click (show info) without poster ', () => {
    const output = renderer.create(<MovieElement {...dataBadPicturePoster} />);
    output.root.findByProps({ className: 'button_show_info' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (show info) ', () => {
    const output = renderer.create(<MovieElement {...data} />);
    output.root.findByProps({ className: 'button_show_info' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (close info) ', () => {
    const output = renderer.create(<MovieElement {...data} />);
    output.root.findByProps({ className: 'button_show_info' }).props.onClick();
    output.root.findByProps({ className: 'descriptionFilmLayer_info_close' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (watch film) ', () => {
    const output = renderer.create(<MovieElement {...data} />);
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieElement -> Click (close film) ', () => {
    const output = renderer.create(<MovieElement {...data} />);
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    output.root.findByProps({ className: 'descriptionFilmLayer_overlay_description_play circle_blue' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
