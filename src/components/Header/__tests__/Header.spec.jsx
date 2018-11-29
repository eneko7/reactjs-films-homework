import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../Header';

const shallow = new ShallowRenderer();

const data = {
  films: [
    {
      allGenres: [{ id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' }],
      filmId: 23355,
      filmName: 'name',
      filmGenres: [1, 2, 3],
      filmRate: 5,
      filmDescription: 'name',
    },
  ],
  genres: [
    { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' },
  ],
};

const badData = {
  films: '',
  genres: [
    { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' },
  ],
};

describe('Header', () => {
  it('render correctly ', () => {
    shallow.render(<Header {...data} />);
    const tree = shallow.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('render correctly if film empty ', () => {
    shallow.render(<Header {...data} />);
    const tree = shallow.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
  it('render correctly ', () => {
    shallow.render(<Header {...badData} />);
    const tree = shallow.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('render correctly if film empty ', () => {
    shallow.render(<Header {...badData} />);
    const tree = shallow.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
