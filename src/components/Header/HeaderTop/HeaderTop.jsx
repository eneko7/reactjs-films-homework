import React from 'react';
import style from './HeaderTop.scss';

const HeaderTop = () => (
  <div className={style.header_top}>
    <span className={style.header_top_span}>FILMS</span>
    <div className={style.header_top_search}>
      <input type="text" id="search_input" className={style.header_top_search_input} placeholder="Searh..." />
    </div>
  </div>
);

export default HeaderTop;
