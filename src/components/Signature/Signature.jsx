import React from 'react';
import style from './Signature.scss';

class Signature extends React.Component {
    render () {
        return (
            <span className={style.main_container_footer_copyright_signature}>{this.props.name}</span>
        );
    }
}

export default Signature;
