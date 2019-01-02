import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription';
import MovieRate from './MovieRate';
import MovieInfoButtons from './MovieInfoButtons';
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

HeaderBottom.defaultProps = {
  duration: 0,
  selectedFilm: {
  },
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
  ),
  duration: PropTypes.number,
};

export default HeaderBottom;
