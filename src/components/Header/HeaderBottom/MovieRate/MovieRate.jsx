import React from 'react';
import style from './MovieRate.scss';

class MovieRate extends React.Component {
    render () {
        let film_rate = this.props.rate;
        let rateStyle = {
            width: (film_rate-0.1) / 5 * 100+'%'
        };
        return (
            <div className={style.bottom_left_filmRate}>
                <div className={style.bottom_left_filmRate_stars_outer}>
                    <div id="rate" style={rateStyle} className={style.bottom_left_filmRate_stars_outer_stars_inner}></div>
                </div>
                <div className={style.bottom_left_filmRate_number}>
                    <span>{film_rate}</span>
                </div>
            </div>
        );
    }
}

export default MovieRate;