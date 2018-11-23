import React from 'react';
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
            isOpen: !prevState.isOpen
        }));
    }
    render () {
        let active = this.state.isOpen?`${style.active}`:'';
        return (
            <div className={style.bottom_right}>
                <div className={`${active} ${style.bottom_right_text_descr}`} >
                    <p className={style.bottom_right_text_descr_p}>
                        {this.props.annotation}
                    </p>
                </div>
                <div className={`${active} ${style.bottom_right_buttons_box}`}>
                    <button className={`${style.bottom_right_buttons_box_button_watch} ${style.bottom_right_buttons_box_button}`}>Watch Now</button>
                    <button className={`${style.bottom_right_buttons_box_button_view} ${style.bottom_right_buttons_box_button}`} onClick={this.openInfoClick}>{!this.state.isOpen?'View Info':'Close'}</button>
                </div>
            </div>
        );
    }
}

export default MovieInfoButtons;