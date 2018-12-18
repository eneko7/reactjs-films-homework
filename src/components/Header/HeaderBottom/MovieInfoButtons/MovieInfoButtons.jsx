import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieInfoButtons.scss';
import ModalWindowFilm from '../../../MoviesGrid/MovieElement/ModalWindowFilm';

class MovieInfoButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isShownFilm: false,
    };
    this.openInfoClick = this.openInfoClick.bind(this);
    this.watchNow = this.watchNow.bind(this);
  }

  openInfoClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  watchNow() {
    this.setState(prevState => ({
      isShownFilm: !prevState.isShownFilm,
    }));
    const { isShownFilm } = this.state;
    if (isShownFilm) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  render() {
    const { annotation, filmId } = this.props;
    const { isOpen, isShownFilm } = this.state;
    const active = isOpen ? `${style.active}` : '';
    return (
      <div>
        <div className={style.bottom_right}>
          <div className={`${active} ${style.bottom_right_text_descr}`}>
            <p className={style.bottom_right_text_descr_p}>
              {annotation}
            </p>
          </div>
          <div className={`${active} ${style.bottom_right_buttons_box}`}>
            <button className={`${style.bottom_right_buttons_box_button_watch} ${style.bottom_right_buttons_box_button}`} type="button" onClick={this.watchNow}>Watch Now</button>
            <button className={`${style.bottom_right_buttons_box_button_view} ${style.bottom_right_buttons_box_button}`} type="button" onClick={this.openInfoClick}>{!isOpen ? 'View Info' : 'Close'}</button>
          </div>
        </div>
        {isShownFilm && <ModalWindowFilm onChange={this.watchNow} filmId={filmId} />}
      </div>
    );
  }
}

MovieInfoButtons.propTypes = {
  annotation: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default MovieInfoButtons;
