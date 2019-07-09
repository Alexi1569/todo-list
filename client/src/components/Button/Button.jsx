import React from 'react';
import classnames from 'classnames';
import renderHTML from 'react-render-html';

import './Button.sass';

const Button = ({ button, clickHandler }) => {
  let template = '';
  const buttonClasses = classnames('btn', {
    'btn--accent': button.isAccent,
    'btn--form': button.isFormButton,
    'btn--link': button.isLinkButton,
    'btn--icon': button.isIconButton,
    'btn--danger': button.isDangerButton
  });

  switch (button.el) {
    case 'button':
      template = (
        <button
          title={button.title ? button.title : null}
          onClick={clickHandler}
          className={buttonClasses}
        >
          {button.text && button.text}
          {button.icon && (
            <React.Fragment>{renderHTML(button.icon)}</React.Fragment>
          )}
        </button>
      );
      break;
    default: {
      template = '';
    }
  }

  return template;
};

export default Button;
