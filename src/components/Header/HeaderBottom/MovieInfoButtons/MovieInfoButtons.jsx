import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieInfoButtons.scss';

class MovieInfoButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openInfoClick = this.openInfoClick.bind(this);
  }

  openInfoClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { annotation } = this.props;
    const { isOpen } = this.state;
    const active = isOpen ? `${style.active}` : '';
    return (
      <div className={style.bottom_right}>
        <div className={`${active} ${style.bottom_right_text_descr}`}>
          <p className={style.bottom_right_text_descr_p}>
            {annotation}
          </p>
        </div>
        <div className={`${active} ${style.bottom_right_buttons_box}`}>
          <button className={`${style.bottom_right_buttons_box_button_watch} ${style.bottom_right_buttons_box_button}`} type="button">Watch Now</button>
          <button className={`${style.bottom_right_buttons_box_button_view} ${style.bottom_right_buttons_box_button}`} type="button" onClick={this.openInfoClick}>{!isOpen ? 'View Info' : 'Close'}</button>
        </div>
      </div>
    );
  }
}

MovieInfoButtons.propTypes = {
  annotation: PropTypes.string.isRequired,
};

export default MovieInfoButtons;
