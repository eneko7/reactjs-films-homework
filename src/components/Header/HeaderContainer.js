import { connect } from 'react-redux';
import Header from './Header';
import { getFilms } from '../../modules/films/filmsSelectors';
import { getGenres } from '../../modules/genres/genresSelectors';
import { getSelectedFilm } from '../../modules/film/filmSelectors';
import { receiveMainFilmInfo } from '../../modules/film/filmActions';

const mapStateToProps = state => ({
  films: getFilms(state),
  genres: getGenres(state),
  selectedFilm: getSelectedFilm(state),
});

const mapDispatchToProps = {
  receiveMainFilmInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
