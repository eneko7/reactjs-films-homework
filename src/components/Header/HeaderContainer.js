import { connect } from 'react-redux';
import Header from './Header';
import { getFilms } from '../../modules/films/filmsSelectors';
import { getGenres } from '../../modules/genres/genresSelectors';
import { getSelectedFilm } from '../../modules/film/filmSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  genres: getGenres(state),
  selectedFilm: getSelectedFilm(state),
});

export default connect(mapStateToProps)(Header);
