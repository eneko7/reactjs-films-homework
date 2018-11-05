import React from 'react';
import style from './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop.jsx';
import HeaderBottom from './HeaderBottom/HeaderBottom.jsx';

class Header extends React.Component {
    render() {
        return(
            <header className={style.app_header}>
                <HeaderTop />
                <HeaderBottom />
            </header>
        );
    }
};

export default Header;
