import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

const Header = (props) => {
  const {
    films,
    genres,
    selectedFilm,
    // location: { pathname },
  } = props;
  // if (pathname === 'film') {
  //   alert('film');
  // }
  let data = {};
  if (films.length < 1 || !selectedFilm) return null;
  data = {
    films,
    duration: selectedFilm.runtime,
    genres,
    bg: { backgroundImage: `url(http://image.tmdb.org/t/p/w1280${films[0].backdrop_path})` },
  };
  return (
    <header id="app_header" className={style.app_header} style={data.bg}>
      <HeaderTopContainer />
      <HeaderBottom {...data} />
    </header>
  );
};

Header.defaultProps = {
  selectedFilm: {},
};

Header.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedFilm: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object,
    ]),
  ),
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.string,
  //   search: PropTypes.string,
  // }).isRequired,
};

export default withRouter(Header);
