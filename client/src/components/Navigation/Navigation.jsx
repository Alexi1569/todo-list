import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import Photo from '../../components/Photo/Photo';
import './Navigation.sass';

const Navigation = ({ isMenuOpen, clickHandler, isAuth, logout, photo }) => {
  const navigationClass = classnames('header__nav', { active: isMenuOpen });

  return (
    <nav onClick={clickHandler} className={navigationClass}>
      <ul>
        {!isAuth && (
          <li>
            <NavLink to="/auth">Login | Register</NavLink>
          </li>
        )}
        {isAuth && (
          <React.Fragment>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">My Tasks</NavLink>
            </li>
            <li className="header__nav-logout">
              <p onClick={logout}>Logout</p>
              <Photo isNavigationPhoto photo={photo} />
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
