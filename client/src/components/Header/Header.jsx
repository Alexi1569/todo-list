import React, { useState } from 'react';

import Logo from '../Logo/Logo';
import Toggler from '../Toggler/Toggler';
import Navigation from '../Navigation/Navigation';
import './Header.sass';

const Header = ({ isAuth, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__line">
          <Logo header />
          <Toggler
            clickHandler={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
            isHeaderToggler
          />
          <Navigation
            clickHandler={() => setIsMenuOpen(false)}
            isMenuOpen={isMenuOpen}
            logout={logout}
            isAuth={isAuth}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
