import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDescription from '../index';

const data = {
  filmName: 'name',
  filmGenres: [
    {
      name: 'Action',
      id: 28,
    },
    {
      name: 'Animation',
      id: 16,
    },
    {
      name: 'Comedy',
      id: 35,
    },
  ],
};

describe('MovieDescription', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDescription {...data} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
