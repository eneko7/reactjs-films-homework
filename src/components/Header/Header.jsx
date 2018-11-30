import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

const Header = (props) => {
  const { films, genres } = props;
  let data = {};
  if (films.length < 1) return null;
  data = {
    films,
    genres,
    bg: { backgroundImage: `url(http://image.tmdb.org/t/p/w1280${films[0].backdrop_path})` },
  };
  // data = {
  //   genres: [
  // {
  //   id: 18,
  //   name: 'Drama',
  // },
  // {
  //   id: 10751,
  //   name: 'Family',
  // },
  // {
  //   id: 14,
  //   name: 'Fantasy',
  // },
  //   ],
  //   films: [
  //     {
  //       filmGenres: [18, 10751, 14],
  //       filmName: 'Fantastic Beasts: The Crimes of Grindelwald default',
  //       filmDescription: 'Gellert Grindelwald has escaped imprisonment and has begun gathering.',
  //       filmRate: 7.1,
  //       filmId: 338952,
  //     },
  //   ],
  //   bg: { backgroundImage: 'url(http://image.tmdb.org/t/p/w1280/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg)' },
  // };
  return (
    <header id="app_header" className={style.app_header} style={data.bg}>
      <HeaderTopContainer />
      <HeaderBottom {...data} />
    </header>
  );
};

Header.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
