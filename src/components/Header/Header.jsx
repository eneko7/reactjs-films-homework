import React from 'react';
import style from './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header = () => (
  <header className={style.app_header}>
    <HeaderTop />
    <HeaderBottom />
  </header>
);

export default Header;
