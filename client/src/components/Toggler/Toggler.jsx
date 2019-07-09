import React from 'react';
import classnames from 'classnames';

import './Toggler.sass';

const Toggler = ({ isHeaderToggler, isMenuOpen, clickHandler }) => {
  const togglerClass = classnames('toggler', {
    'toggler--header': isHeaderToggler,
    'toggler--open': isMenuOpen
  });

  return (
    <button onClick={clickHandler} className={togglerClass}>
      <span className="toggler__line" />
      <span className="toggler__line" />
      <span className="toggler__line" />
    </button>
  );
};

export default Toggler;
