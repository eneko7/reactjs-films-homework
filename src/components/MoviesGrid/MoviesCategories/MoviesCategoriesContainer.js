import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MoviesCategories from './MoviesCategories';
import { pushNavigationLink } from '../../../modules/navlinks/navlinksActions';
import getClickedLink from '../../../modules/navlinks/navlinksSelectors';
import { fetchFilmsBySearch } from '../../../modules/films/filmsActions';

const mapStateToProps = state => ({
  clickedLink: getClickedLink(state),
});

const mapDispatchToProps = {
  pushNavigationLink,
  fetchFilmsBySearch,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesCategories));
