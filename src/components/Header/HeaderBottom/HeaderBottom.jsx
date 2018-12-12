import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription/MovieDescription';
import MovieRate from './MovieRate/MovieRate';
import MovieInfoButtons from './MovieInfoButtons/MovieInfoButtons';
import style from './HeaderBottom.scss';

const HeaderBottom = (props) => {
  const {
    selectedFilm, duration,
  } = props;
  if (selectedFilm && duration) {
    return (
      <div className={style.header_bottom}>
        <div className={`${style.active} ${style.header_bottom_left}`}>
          <MovieDescription
            filmName={selectedFilm.title}
            filmGenres={selectedFilm.genres}
            filmDuration={duration}
          />
          <MovieRate rate={selectedFilm.vote_average} />
        </div>
        <MovieInfoButtons annotation={selectedFilm.overview} filmId={selectedFilm.id} />
      </div>
    );
  }
  return null;
};

HeaderBottom.propTypes = {
  selectedFilm: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object,
    ]),
  ).isRequired,
  duration: PropTypes.number.isRequired,
};

export default HeaderBottom;
