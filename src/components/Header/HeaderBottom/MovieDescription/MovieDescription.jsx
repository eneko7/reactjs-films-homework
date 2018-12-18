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
    <span key={item.id} className={style.full_description_filmDescr_item}>
      {item.name}
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

MovieDescription.defaultProps = {
  filmDuration: 10,
};

MovieDescription.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmDuration: PropTypes.number,
};

export default MovieDescription;
