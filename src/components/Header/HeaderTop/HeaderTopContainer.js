import { connect } from 'react-redux';
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
