import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const {
      selectedFilm,
    } = this.props;
    let data = {};
    if (!selectedFilm) {
      return (
        <header id="app_header" className={`${style.app_header} ${style.error}`}>
          <HeaderTop />
        </header>
      );
    }
    data = {
      selectedFilm,
      duration: selectedFilm.runtime,
      bg: { backgroundImage: `url(//image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})` },
    };
    return (
      <header id="app_header" className={style.app_header} style={data.bg}>
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
  receiveMainFilmInfo: PropTypes.func.isRequired,
  selectedFilm: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object,
    ]),
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
