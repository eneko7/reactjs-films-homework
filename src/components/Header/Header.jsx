import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const Header = (props) => {
  const {
    selectedFilm,
  } = props;
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
};

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
};

export default Header;
