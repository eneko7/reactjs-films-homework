import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieRate from '../MovieRate';

describe('MovieRate', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieRate rate="4.8" />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
