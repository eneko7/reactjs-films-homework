import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDescription from '../index';

const data = {
  filmName: 'THE JUNGLE BOOK',
  filmDescrProps: 'Adventure, Drama, Family, Fantasy, |, 1h 46m',
};

describe('MovieDescription', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDescription {...data} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
