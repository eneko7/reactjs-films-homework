import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

class Header extends React.Component {
  componentDidMount() {
    const { location, receiveMainFilmInfo } = this.props;
    if (location.search !== '') {
      receiveMainFilmInfo(queryString.parse(location.search).filmId);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search }, receiveMainFilmInfo,
    } = this.props;
    const {
      filmId,
    } = queryString.parse(search);
    if (filmId !== queryString.parse(prevProps.location.search).filmId) {
      receiveMainFilmInfo(filmId);
    }
  }

  render() {
    const {
      selectedFilm,
    } = this.props;
    if (selectedFilm === null) {
      return (
        <header id="app_header" className={`${style.app_header} ${style.error}`}>
          <HeaderTop />
        </header>
      );
    }
    const bg = { backgroundImage: `url(//image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})` };
    const data = {
      selectedFilm,
      duration: selectedFilm.runtime,
    };
    return (
      <header id="app_header" className={style.app_header} style={bg}>
        <HeaderTop />
        <HeaderBottom {...data} />
      </header>
    );
  }
}

Header.defaultProps = {
  selectedFilm: {},
};

Header.propTypes = {
  selectedFilm: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object,
    ]),
  ),
  receiveMainFilmInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Header;
