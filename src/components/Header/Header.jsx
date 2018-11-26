import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

const Header = (props) => {
  const { films, genres } = props;
  const film = films[0];
  let data = {
    allGenres: genres,
    filmGenres: [18, 10751, 14],
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald default',
    filmDescription: 'Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    filmRate: 7.1,
    filmId: 338952,
    bg: { backgroundImage: 'url(http://image.tmdb.org/t/p/w1280/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg)' },
  };
  if (typeof film === 'object') {
    data = {
      allGenres: genres,
      filmGenres: film.genre_ids,
      filmName: film.original_title,
      filmDescription: film.overview,
      filmRate: film.vote_average,
      filmId: film.id,
      bg: { backgroundImage: `url(http://image.tmdb.org/t/p/w1280${film.backdrop_path})` },
    };
  }
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
