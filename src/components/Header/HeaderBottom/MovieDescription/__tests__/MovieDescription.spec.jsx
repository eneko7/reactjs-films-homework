import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDescription from '../index';

const data = {
  filmName: 'name',
  filmGenres: ['genre 1', 'genre 2', 'genre 3'],
};

describe('MovieDescription', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDescription {...data} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
