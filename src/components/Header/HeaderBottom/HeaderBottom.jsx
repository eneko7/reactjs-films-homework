import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription';
import MovieRate from './MovieRate';
import MovieInfoButtons from './MovieInfoButtons';
import style from './HeaderBottom.scss';

const HeaderBottom = (props) => {
  const {
    films, genres,
  } = props;
  if (films[0]) {
    const genresCol = [];
    const genresOfFilm = films[0].genre_ids;
    genresOfFilm.forEach((elem) => {
      genres.forEach((el) => {
        if (elem === el.id) genresCol.push(el.name);
      });
    });
    return (
      <div className={style.header_bottom}>
        <div className={`${style.active} ${style.header_bottom_left}`}>
          <MovieDescription filmName={films[0].title} filmGenres={genresCol} />
          <MovieRate rate={films[0].vote_average} />
        </div>
        <MovieInfoButtons annotation={films[0].overview} filmId={films[0].id} />
      </div>
    );
  }
  return null;
};

HeaderBottom.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeaderBottom;
