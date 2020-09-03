import React from 'react';
import './LoadingScreen.css';
import whiteLogo from '../../imgs/logos/logo-white.png';
import PropTypes from 'prop-types';

LoadingScreen.propTypes = {
    loadingMessage: PropTypes.string
}

export default function LoadingScreen(props){
    const { loadingMessage = "Loading" } = props;
    return(
        <div className="LoadingScreen">
            <div className="LoadingScreen-main">
                <img className="LoadingScreen-spinner" src={whiteLogo} alt=""/>
                <div className="LoadingScreen-messageContainer">
                    <p className="LoadingScreen-message">{ loadingMessage }</p>
                    <span className="LoadingScreen-dot--One LoadingScreen-dot">.</span>
                    <span className="LoadingScreen-dot--Two LoadingScreen-dot">.</span>
                    <span className="LoadingScreen-dot--Three LoadingScreen-dot">.</span>
                </div>
            </div>
        </div>
    )
}