import React from 'react';
import style from './HeaderTop.scss';

class HeaderTop extends React.Component {
    render () {
        return (
            <div className={style.header_top}>
                <span className={style.header_top_span}>FILMS</span>
                <div className={style.header_top_search}>
                    <input type="text" id="search_input" className={style.header_top_search_input} placeholder="Searh..."/>
                    <label htmlFor="search_input" className={style.header_top_search_label}></label>
                </div>
            </div>
        );
    }
}

export default HeaderTop;