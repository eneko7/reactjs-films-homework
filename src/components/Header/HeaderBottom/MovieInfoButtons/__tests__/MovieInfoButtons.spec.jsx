import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MovieInfoButtons from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
});

const data = {
  annotation: 'film description',
  filmId: 1023,
};

describe('MovieInfoButtons', () => {
  it('renders correctly', () => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(
      <Provider store={store}>
        <MovieInfoButtons {...data} />
      </Provider>,
    );
    const result = shallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (show info) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_view bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (watch film) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_watch bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
