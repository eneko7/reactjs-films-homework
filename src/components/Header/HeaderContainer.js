import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import { getSelectedFilm } from '../../modules/film/filmSelectors';
import { receiveMainFilmInfo } from '../../modules/film/filmActions';

const mapStateToProps = state => ({
  selectedFilm: getSelectedFilm(state),

});
const mapDispatchToProps = {
  receiveMainFilmInfo,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
