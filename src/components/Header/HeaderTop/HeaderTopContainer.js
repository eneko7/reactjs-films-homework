import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import { saveSearchingWord, searchFilm } from '../../../modules/seacrhFilms/searchFilmsActions';
import { fetchFilmsPopular } from '../../../modules/films/filmsActions';
import { pushNavigationLink } from '../../../modules/navlinks/navlinksActions';
import getSearchingWord from '../../../modules/seacrhFilms/searchFilmsSelectors';

const mapStateToProps = state => ({
  searchedWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  saveSearchingWord,
  searchFilm,
  fetchFilmsPopular,
  pushNavigationLink,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderTop));
