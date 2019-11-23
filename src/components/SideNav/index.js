import React from 'react';

import './styles.scss';

const SideNav = () => {
  return (
    <div id='sidenav-wrapper'>
      <div id='sidenav-logo-wrapper'>
        <i className='fas fa-angle-double-up'></i>
      </div>
      <div id='sidenav-links-wrapper'>
        <a href='!#' className='nav-link'>
          <i className='fas fa-home nav-icon'></i>
        </a>
        <a href='!#' className='nav-link'>
          <i className='fas fa-shopping-bag nav-icon'></i>
        </a>
        <a href='!#' className='nav-link'>
          <i className='fas fa-align-left nav-icon'></i>
        </a>
        <a href='!#' className='nav-link'>
          <i className='fas fa-rss-square nav-icon'></i>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
