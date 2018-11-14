import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieRate.scss';

const MovieRate = (props) => {
  const {
    rate,
  } = props;
  const rateStyle = {
    width: `${(rate - 0.1) / 5 * 100}%`,
  };
  return (
    <div className={style.bottom_left_filmRate}>
      <div className={style.bottom_left_filmRate_stars_outer}>
        <div id="rate" style={rateStyle} className={style.bottom_left_filmRate_stars_outer_stars_inner} />
      </div>
      <div className={style.bottom_left_filmRate_number}>
        <span>{rate}</span>
      </div>
    </div>
  );
};

MovieRate.propTypes = {
  rate: PropTypes.string.isRequired,
};

export default MovieRate;
