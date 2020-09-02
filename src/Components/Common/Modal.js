import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Modal.css'
import PropTypes from 'prop-types';

Modal.propTypes = {
    modalInfo: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
}

function Modal(props){
    const { modalInfo, toggleModal } = props;
    const { open, content } = modalInfo;

    useEffect(() => {
        open ? document.body.style.overflow = "hidden" : document.body.style.overflow = '';
    }, [open])

    useEffect(() => {
        function closeModal(e){
            if(e.type === 'keyup' && e.which === 27 && open){
                toggleModal(null, false)
            } else if (e.type === 'resize' && open) {
                toggleModal(null, false)
            } else if (e.type === 'click' && e.target.classList.contains('Modal')){
                toggleModal(null, false)
            }
        }
        window.addEventListener('click', closeModal);
        window.addEventListener('keyup', closeModal);
        window.addEventListener('resize', closeModal);
        return (() => {
            window.removeEventListener('click', closeModal)
            window.removeEventListener('keyup', closeModal)
            window.removeEventListener('resize', closeModal);
        })
    // eslint-disable-next-line
    }, [])

    const location = useLocation();
    useEffect(() => {
        toggleModal(null, false);
        // eslint-disable-next-line
    }, [location])

    let modalOnOff = open ? 'Modal--open' : null;
    return (
        <div className={`${modalOnOff} Modal`}>
            { content }
            <div onClick={toggleModal.bind(null, null, false)} className="Modal-closeBtn">
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default Modal;