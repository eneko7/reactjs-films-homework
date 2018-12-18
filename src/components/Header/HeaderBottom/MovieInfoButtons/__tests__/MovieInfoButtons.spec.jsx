import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import MovieInfoButtons from '../index';

jest.mock('../../../../MoviesGrid/MovieElement/ModalWindowFilm/ModalWindowFilmContainer', () => () => <div>test</div>);

const data = {
  annotation: 'film description',
  filmId: 1023,
};

describe('MovieInfoButtons', () => {
  it('renders correctly', () => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(
      <MovieInfoButtons {...data} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (show info) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_view bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (close info) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_view bottom_right_buttons_box_button' }).props.onClick();
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_view bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (watch film) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_watch bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });

  it('MovieInfoButtons -> Click (close film) ', () => {
    const output = renderer.create(<MovieInfoButtons {...data} />);
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_watch bottom_right_buttons_box_button' }).props.onClick();
    output.root.findByProps({ className: 'bottom_right_buttons_box_button_watch bottom_right_buttons_box_button' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
