import React from 'react';
import classnames from 'classnames';

import './Photo.sass';

const Photo = ({ isProfilePhoto, isNavigationPhoto, photo }) => {
  const photoClass = classnames('photo', {
    'photo--profile': isProfilePhoto,
    'photo--navigation': isNavigationPhoto
  });

  return (
    <div
      className={photoClass}
      style={{
        backgroundImage: `url(${photo})`
      }}
    />
  );
};

export default Photo;
