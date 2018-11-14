import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDescription.scss';

const MovieDescription = (props) => {
  const {
    filmName,
    filmDescr,
  } = props;
  const filmDescrArr = filmDescr.split(',');
  const descrItems = filmDescrArr.map(item => (
    <span key={item} className={style.full_description_filmDescr_item}>
      {item}
    </span>
  ));
  return (
    <div className={style.full_description}>
      <span className={style.full_description_filmName}>{filmName}</span>
      <div className={style.full_description_filmDescr}>
        {descrItems}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmDescr: PropTypes.string.isRequired,
};

export default MovieDescription;
