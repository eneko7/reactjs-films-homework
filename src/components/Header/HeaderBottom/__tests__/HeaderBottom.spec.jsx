import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderBottom from '../HeaderBottom';

const data = {
  genres: [
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
  films: [
    {
      id: 23355,
      original_title: 'name',
      genre_ids: [1, 2, 3],
      vote_average: 5,
      overview: 'name',
    },
  ],
};
const badData = {
  genres: [
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
  films: [],
};

describe('HeaderBottom', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HeaderBottom {...data} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
describe('HeaderBottom', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HeaderBottom {...badData} />);
  it('renders correctly bad', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});