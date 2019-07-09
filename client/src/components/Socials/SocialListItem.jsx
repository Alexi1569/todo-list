import React from 'react';
import renderHTML from 'react-render-html';

const SocialListItem = ({ social }) => (
  <li>
    <a rel="noopener noreferrer" target="_blank" href={social.link}>
      <i>{renderHTML(social.icon)}</i>
    </a>
  </li>
);

export default SocialListItem;
