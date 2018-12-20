import { connect } from 'react-redux';
import Header from './Header';
import { getSelectedFilm } from '../../modules/film/filmSelectors';

const mapStateToProps = state => ({
  selectedFilm: getSelectedFilm(state),

});
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
