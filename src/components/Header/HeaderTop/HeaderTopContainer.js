import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import { saveSearchingWord, searchFilm } from '../../../modules/seacrhFilms/searchFilmsActions';
import { fetchFilmsPopular } from '../../../modules/films/filmsActions';
import getSearchingWord from '../../../modules/seacrhFilms/searchFilmsSelectors';

const mapStateToProps = state => ({
  searchedWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  saveSearchingWord,
  searchFilm,
  fetchFilmsPopular,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderTop));
