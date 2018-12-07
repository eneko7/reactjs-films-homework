import { connect } from 'react-redux';
import MoviesCategories from './MoviesCategories';
import { pushNavigationLink } from '../../../modules/navlinks/navlinksActions';
import getClickedLink from '../../../modules/navlinks/navlinksSelectors';

const mapStateToProps = state => ({
  clickedLink: getClickedLink(state),
});

const mapDispatchToProps = {
  pushNavigationLink,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesCategories);