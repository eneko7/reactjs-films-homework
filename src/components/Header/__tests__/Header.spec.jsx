import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import HeaderContainer from '../index';

const data = {
  films: [
    {
      backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
      genre_ids: [18, 10751, 14],
      original_title: 'original_title',
      overview: 'overview',
      vote_average: 8,
      id: 338952,
    },
  ],
  genres: [
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

const badData = {
  films: [
    '',
  ],
  genres: [
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

describe('Header', () => {
  it('render correctly ', () => {
    const output = renderer.create(<HeaderContainer {...data} />);
    expect(output).toMatchSnapshot();
  });

  it('render correctly if film empty ', () => {
    const output = renderer.create(<HeaderContainer {...badData} />);
    expect(output).toMatchSnapshot();
  });
  it('render correctly ', () => {
    const output = renderer.create(<Header {...data} />);
    expect(output).toMatchSnapshot();
  });

  it('render correctly if film empty ', () => {
    const output = renderer.create(<Header {...badData} />);
    expect(output).toMatchSnapshot();
  });
});
