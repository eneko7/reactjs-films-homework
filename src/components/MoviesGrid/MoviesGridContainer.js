import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MoviesGrid from './MoviesGrid';
import { fetchFilmsPopular, fetchNextFilms } from '../../modules/films/filmsActions';
import { getFilms, getIsFetchingFilms } from '../../modules/films/filmsSelectors';
import { getGenres } from '../../modules/genres/genresSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  isFetchingFilms: getIsFetchingFilms(state),
  genres: getGenres(state),
});

const mapDispatchToProps = {
  fetchFilmsPopular,
  fetchNextFilms,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesGrid));
