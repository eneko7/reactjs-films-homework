import React from 'react';
import PropTypes from 'prop-types';
import style from './ModalWindowFilm.scss';

class ModalWindowFilm extends React.Component {
  componentDidMount() {
    const { filmId, fetchFilm } = this.props;
    fetchFilm(filmId);
  }

  render() {
    const { filmId, onChange, filmTrailerKey } = this.props;
    if (filmId > 0) {
      return (
        <div className={style.ModalWindowFilm}>
          <button type="button" className={style.ModalWindowFilm_close} onClick={onChange} />
          <button type="button" className={style.ModalWindowFilm_close_button} onClick={onChange}>&times;</button>
          <iframe
            title="title"
            className={style.ModalWindowFilm_film_iframe}
            src={`https://www.youtube.com/embed/${filmTrailerKey}?autoplay=1&modestbranding=1&showinfo=0&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className={style.ModalWindowFilm_film_error} />
    );
  }
}

ModalWindowFilm.propTypes = {
  onChange: PropTypes.func.isRequired,
  fetchFilm: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
  filmTrailerKey: PropTypes.string.isRequired,
};

export default ModalWindowFilm;
