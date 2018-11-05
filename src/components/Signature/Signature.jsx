import React from 'react';
import style from './Signature.scss';
import PropTypes from 'prop-types';

class Signature extends React.Component {
    render () {
        return (
            <span className={style.copyright_signature}>{this.props.name}</span>
        );
    }
}

Signature.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Signature;
