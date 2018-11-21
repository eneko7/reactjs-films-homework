import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../index';

describe('App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
