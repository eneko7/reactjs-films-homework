import getClickedLink from '../navlinksSelectors';

const initialState = {
  clickedLink: 'Trending',
};

describe('NavLink Selectors', () => {
  const state = {
    navlinks: initialState,
  };
  it('getClickedLink selector', () => {
    expect(getClickedLink(state))
      .toEqual(state.navlinks.clickedLink);
  });
});
