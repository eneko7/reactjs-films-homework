import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPage from '../index';

const shallow = new ShallowRenderer();

describe('MovieDetailsPage Snapshot', () => {
  test('renders', () => {
    const component = shallow.render(
      <MovieDetailsPage />,
    );
    expect(component).toMatchSnapshot();
  });
});
