import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription';
import MovieRate from './MovieRate';
import MovieInfoButtons from './MovieInfoButtons';
import style from './HeaderBottom.scss';

const HeaderBottom = (props) => {
  const {
    film, genres,
  } = props;
  if (Object.keys(film).length !== 0) {
    const genresCol = [];
    const genresOfFilm = film.genre_ids;
    genresOfFilm.forEach((elem) => {
      genres.forEach((el) => {
        if (elem === el.id) genresCol.push(el.name);
      });
    });
    return (
      <div className={style.header_bottom}>
        <div className={`${style.active} ${style.header_bottom_left}`}>
          <MovieDescription filmName={film.title} filmGenres={genresCol} />
          <MovieRate rate={film.vote_average} />
        </div>
        <MovieInfoButtons annotation={film.overview} filmId={film.id} />
      </div>
    );
  }
  return null;
};

HeaderBottom.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  film: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
    ]),
  ).isRequired,
};

export default HeaderBottom;
