import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const Header = (props) => {
  const { films, genres } = props;
  if (films.length < 1) {
    return (
      <header id="app_header" className={`${style.app_header} ${style.error}`}>
        <HeaderTop />
      </header>
    );
  }
  const data = {
    film: films[0],
    genres,
  };
  const bg = { backgroundImage: `url(//image.tmdb.org/t/p/w1280${films[0].backdrop_path})` };
  return (
    <header id="app_header" className={style.app_header} style={bg}>
      <HeaderTop />
      <HeaderBottom {...data} />
    </header>
  );
};

Header.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
