import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription/MovieDescription';
import MovieRate from './MovieRate/MovieRate';
import MovieInfoButtons from './MovieInfoButtons/MovieInfoButtons';
import style from './HeaderBottom.scss';

const HeaderBottom = (props) => {
  const {
    filmGenres,
    filmName,
    filmDescription,
    filmRate,
    allGenres,
    filmId,
  } = props;
  const genres = [];
  filmGenres.forEach((elem) => {
    allGenres.forEach((el) => {
      if (elem === el.id) {
        genres.push(el.name);
      }
    });
  });
  return (
    <div className={style.header_bottom}>
      <div className={`${style.active} ${style.header_bottom_left}`}>
        <MovieDescription filmName={filmName} filmGenres={genres} />
        <MovieRate rate={filmRate} />
      </div>
      <MovieInfoButtons annotation={filmDescription} filmId={filmId} />
    </div>
  );
};

HeaderBottom.propTypes = {
  filmGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmName: PropTypes.string.isRequired,
  filmDescription: PropTypes.string.isRequired,
  filmRate: PropTypes.number.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default HeaderBottom;
