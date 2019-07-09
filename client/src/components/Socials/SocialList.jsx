import React from 'react';
import classnames from 'classnames';

import SocialListItem from './SocialListItem';
import './Socials.sass';

const SocialList = ({ socials, footer }) => {
  const socialListClasses = classnames('socials', {
    'footer--socials': footer
  });

  const socialList = socials.map((social, i) => (
    <SocialListItem key={i} social={social} />
  ));

  return <ul className={socialListClasses}>{socialList}</ul>;
};

export default SocialList;
