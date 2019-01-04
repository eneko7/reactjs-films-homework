import React from 'react';
import style from './PageNotFound.scss';

const PageNotFound = () => (
  <div className={style.main_container_page_not_found}>
    <span className={style.main_container_page_not_found_span}>404 Error</span>
    <span className={style.main_container_page_not_found_span}>Page not found</span>
  </div>
);

export default PageNotFound;
