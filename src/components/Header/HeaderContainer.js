import { connect } from 'react-redux';
import Header from './Header';
import { getFilms } from '../../modules/films/filmsSelectors';
import { getGenres } from '../../modules/genres/genresSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  genres: getGenres(state),
});

export default connect(mapStateToProps)(Header);
