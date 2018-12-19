import { PUSH_NAVIGATION_LINK } from './navlinksActions';

const initialState = {
  clickedLink: 'Trending',
};

const navlinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_NAVIGATION_LINK:
      return {
        ...state,
        clickedLink: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default navlinksReducer;
