import { connect } from 'react-redux';
import HeaderTop from './HeaderTop';
import { saveSearchingWord, searchFilm } from '../../../modules/seacrhFilms/searchFilmsActions';
import getSearchingWord from '../../../modules/seacrhFilms/searchFilmsSelectors';

const mapStateToProps = state => ({
  searchedWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  saveSearchingWord,
  searchFilm,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
