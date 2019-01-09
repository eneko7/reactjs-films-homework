import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageNotFound from '../index';

const shallow = new ShallowRenderer();

describe('PageNotFound Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <PageNotFound />,
    );
    expect(component).toMatchSnapshot();
  });
});
