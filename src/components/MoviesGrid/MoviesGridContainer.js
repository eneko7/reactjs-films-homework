import { connect } from 'react-redux';
import MoviesGrid from './MoviesGrid';
import { fetchFilmsPopular, fetchNextFilms } from '../../modules/films/filmsActions';
import { getFilms, getIsFetchingFilms } from '../../modules/films/filmsSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  isFetchingFilms: getIsFetchingFilms(state),
});

const mapDispatchToProps = {
  fetchFilmsPopular,
  fetchNextFilms,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesGrid);
