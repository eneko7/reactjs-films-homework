import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderBottom from '../HeaderBottom';

const data = {
  allGenres: [{}, {}],
  filmId: 23355,
  filmName: 'name',
  filmGenres: [1, 2, 3],
  filmRate: 5,
  filmDescription: 'name',
};

describe('HeaderBottom', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HeaderBottom {...data} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
