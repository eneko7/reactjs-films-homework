import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

const Header = (props) => {
  const { films, genres } = props;
  const film = films[0];
  let bg = {};
  let filmGenres = [];
  let filmName = '';
  let filmDescription = '';
  let filmRate = 0;
  let filmId = 0;
  if (typeof film === 'object') {
    bg = { backgroundImage: `url(http://image.tmdb.org/t/p/w1280${film.backdrop_path})` };
    filmGenres = film.genre_ids;
    filmName = film.original_title;
    filmDescription = film.overview;
    filmRate = film.vote_average;
    filmId = film.id;
  }
  return (
    <header id="app_header" className={style.app_header} style={bg}>
      <HeaderTopContainer />
      <HeaderBottom
        filmGenres={filmGenres}
        filmName={filmName}
        filmDescription={filmDescription}
        filmRate={filmRate}
        allGenres={genres}
        filmId={filmId}
      />
    </header>
  );
};

Header.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
