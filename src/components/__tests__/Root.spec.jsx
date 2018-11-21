import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Root from '../Root';

const renderer = new ShallowRenderer();
renderer.render(<Root />);
describe('Root', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
