import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDescription.scss';

const MovieDescription = (props) => {
  const {
    filmName,
    filmGenres,
    filmDuration,
  } = props;
  const filmDurationHours = (filmDuration / 60).toFixed(0);
  const filmDurationMinutes = (filmDuration % 60);
  const descrItems = filmGenres.map(item => (
    <span key={item} className={style.full_description_filmDescr_item}>
      {item}
    </span>
  ));
  return (
    <div className={style.full_description}>
      <span className={style.full_description_filmName}>{filmName}</span>
      <div className={style.full_description_filmDescr}>
        {descrItems}
        <span className={style.full_description_filmDescr_item}>|</span>
        <span className={style.full_description_filmDescr_item}>
          {`${filmDurationHours}h ${filmDurationMinutes}m`}
        </span>
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filmDuration: PropTypes.number.isRequired,
};

export default MovieDescription;
