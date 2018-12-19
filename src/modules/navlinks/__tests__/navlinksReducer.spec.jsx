import reducer from '../navlinksReducer';
import * as actions from '../navlinksActions';

const initialState = {
  clickedLink: 'Trending',
};

const mockData = 'popular';

describe('NavLink Reducer', () => {
  it('pushed navigation link', () => {
    expect(reducer(initialState, {
      type: actions.PUSH_NAVIGATION_LINK,
      payload: mockData,
    }))
      .toEqual({
        clickedLink: mockData,
      });
  });
  it('without any actions', () => {
    expect(reducer(initialState, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
