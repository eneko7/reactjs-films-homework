import React from 'react';
import style from './MovieDescription.scss';

class MovieDescription extends React.Component {
    render () {
        let filmDescr = this.props.filmDescr.split(',');
        const descr_items = filmDescr.map((item, index) => 
            <span key={index} className={style.full_description_filmDescr_item}>{item}</span>
        );
        return (
            <div className={style.full_description}>
                <span className={style.full_description_filmName}>{this.props.filmName}</span>
                <div className={style.full_description_filmDescr}>
                    {descr_items}
                </div>
            </div>
        );
    }
}

export default MovieDescription;