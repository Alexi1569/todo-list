import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './Logo.sass';

const Logo = ({ footer, header, dark }) => {
  const logoClass = classnames('logo', {
    'logo--dark': dark,
    'footer--logo': footer,
    'header--logo': header
  });
  return (
    <Link className={logoClass} to="/">
      <span>Todo</span> List
    </Link>
  );
};

export default Logo;
