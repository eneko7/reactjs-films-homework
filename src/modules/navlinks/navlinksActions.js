import {
  fetchFilmsPopular,
  fetchFilmsTopRated,
  fetchFilmsComingSoon,
} from '../films/filmsActions';

export const PUSH_NAVIGATION_LINK = 'PUSH_NAVIGATION_LINK';

export const pushNavigationLink = payload => (dispatch) => {
  dispatch({
    type: PUSH_NAVIGATION_LINK,
    payload,
  });
  const map = {
    Trending: fetchFilmsPopular,
    'Top Rated': fetchFilmsTopRated,
    'Coming Soon': fetchFilmsComingSoon,
  };
  dispatch((map[payload])());
};
