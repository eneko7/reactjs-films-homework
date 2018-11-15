import { connect } from 'react-redux';
import ModalWindowFilm from './ModalWindowFilm';
import { fetchFilm } from '../../../../modules/film/filmActions';
import {
  getFilmTrailerKey,
  getIsFetchingFilm,
  getIsErrorFilm,
} from '../../../../modules/film/filmSelectors';


const mapStateToProps = state => ({
  filmTrailerKey: getFilmTrailerKey(state),
  isFetchingFilm: getIsFetchingFilm(state),
  isErrorFilm: getIsErrorFilm(state),
});

const mapDispatchToProps = {
  fetchFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowFilm);
