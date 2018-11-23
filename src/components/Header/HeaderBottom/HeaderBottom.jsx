import React from 'react';
import MovieDescription from './MovieDescription/MovieDescription.jsx';
import MovieRate from './MovieRate/MovieRate.jsx';
import MovieInfoButtons from './MovieInfoButtons/MovieInfoButtons.jsx';
import style from './HeaderBottom.scss';

class HeaderBottom extends React.Component {
    render () {
        return (
            <div className={style.header_bottom}>
                <div className={`${style.active} ${style.header_bottom_left}`}>
                    <MovieDescription filmName="THE JUNGLE BOOK"  filmDescr="Adventure, Drama, Family, Fantasy, |, 1h 46m"/>
                    <MovieRate rate="4.8"/>
                </div>
                <MovieInfoButtons annotation="There are growing dangers in the wizarding world og 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding" />
            </div>
        );
    }
}

export default HeaderBottom;