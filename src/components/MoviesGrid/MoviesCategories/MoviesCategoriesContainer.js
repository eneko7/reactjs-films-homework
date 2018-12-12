import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MoviesCategories from './MoviesCategories';
import { pushNavigationLink } from '../../../modules/navlinks/navlinksActions';
import getClickedLink from '../../../modules/navlinks/navlinksSelectors';
import { fetchFilmsBySearch, fetchFilmsByGenre } from '../../../modules/films/filmsActions';
import { receiveMainFilmInfo } from '../../../modules/film/filmActions';

const mapStateToProps = state => ({
  clickedLink: getClickedLink(state),
});

const mapDispatchToProps = {
  pushNavigationLink,
  fetchFilmsBySearch,
  receiveMainFilmInfo,
  fetchFilmsByGenre,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesCategories));
