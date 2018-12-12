import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieElement from './MovieElement';
import { getSelectedFilm } from '../../../modules/film/filmSelectors';
import { receiveMainFilmInfo } from '../../../modules/film/filmActions';

const mapStateToProps = state => ({
  selectedFilm: getSelectedFilm(state),
});

const mapDispatchToProps = {
  receiveMainFilmInfo,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieElement));
