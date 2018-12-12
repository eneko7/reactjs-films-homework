import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
// import queryString from 'query-string';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const {
      selectedFilm,
    } = this.props;
    let data = {};
    if (!selectedFilm) return null;
    data = {
      selectedFilm,
      duration: selectedFilm.runtime,
      bg: { backgroundImage: `url(http://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})` },
    };
    return (
      <header id="app_header" className={style.app_header} style={data.bg}>
        <HeaderTopContainer />
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
