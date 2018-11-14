import React from 'react';
import PropTypes from 'prop-types';
import style from './ModalWindowFilm.scss';

class ModalWindowFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieVideoLink: '',
    };
  }

  componentWillMount() {
    const { filmId } = this.props;
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=6a08c0def237c5910708279c9ee78cc5`)
      .then(res => res.json())
      .then((data) => {
        this.setState(() => ({
          movieVideoLink: data.results[0].key,
        }));
        return data;
      });
  }

  render() {
    const { movieVideoLink } = this.state;
    const { onChange } = this.props;
    return (
      <div className={style.ModalWindowFilm}>
        <button type="button" className={style.ModalWindowFilm_close} onClick={onChange} />
        <button type="button" className={style.ModalWindowFilm_close_button} onClick={onChange}>&times;</button>
        <iframe
          title="title"
          className={style.ModalWindowFilm_film_iframe}
          src={`https://www.youtube.com/embed/${movieVideoLink}?autoplay=1&modestbranding=1&showinfo=0&rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

ModalWindowFilm.propTypes = {
  onChange: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default ModalWindowFilm;
