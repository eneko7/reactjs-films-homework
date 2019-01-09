import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Genres from './Genres';
import { fetchGenres } from '../../../modules/genres/genresActions';
import { getGenres, getGenresId } from '../../../modules/genres/genresSelectors';
import { fetchFilmsByGenre } from '../../../modules/films/filmsActions';

const mapStateToProps = state => ({
  genres: getGenres(state),
  genresLastId: getGenresId(state),
});

const mapDispatchToProps = {
  fetchGenres,
  fetchFilmsByGenre,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genres));
