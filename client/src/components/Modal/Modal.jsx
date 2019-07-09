import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import './Modal.sass';

const Modal = ({ title, children, closeModal, isOpen }) => {
  const modalClass = classnames('modal', {
    'modal--open': isOpen
  });

  return (
    <CSSTransition
      in={isOpen}
      timeout={350}
      unmountOnExit
      classNames="modal-anim"
    >
      <div className={modalClass}>
        <div onClick={() => closeModal()} className="modal__bg" />
        <div className="modal__inner">
          <i onClick={() => closeModal()} className="modal__close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971">
              <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" />
            </svg>
          </i>
          {title && (
            <div className="modal__top">
              <p className="modal__title">{title}</p>
            </div>
          )}
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
