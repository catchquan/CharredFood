import React from 'react';
import PropTypes from 'prop-types';
import './ModalImg.css';

ModalImg.propTypes = {
    img: PropTypes.string.isRequired
}

export default function ModalImg(props) {
    const { img } = props;

    return (
        <div className='ModalImg'>
            <img src={ img } alt=""/>
        </div>
    )
}
