import React from 'react';
import style from './Header.scss';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTopContainer from './HeaderTop/HeaderTopContainer';

const Header = () => (
  <header className={style.app_header}>
    <HeaderTopContainer />
    <HeaderBottom />
  </header>
);

export default Header;
