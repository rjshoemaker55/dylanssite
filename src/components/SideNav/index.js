import React, { useState } from 'react';
const jQuery = require('jquery');

const SideNav = () => {
  const [navVisible, setNavVisible] = useState('block');

  const hideNav = () => {
    console.log('clicked');
    setNavVisible('none');
    console.log(navVisible);
  };

  const animatedScroll = () => {
    jQuery('#main-container').animate(
      {
        scrollTop: jQuery('#shop-display-wrapper').offset().top
      },
      600
    );
  };

  return (
    <div id='sidenav-wrapper'>
      <div id='sidenav-logo-wrapper'>
        <i className='fas fa-angle-double-up'></i>
      </div>
      <div id='sidenav-links-wrapper'>
        <a href='!#' className='nav-link'>
          <i className='fas fa-home nav-icon'></i>
        </a>
        <div onClick={animatedScroll} className='nav-link'>
          <i className='fas fa-shopping-bag nav-icon'></i>
        </div>
        <a href='!#' className='nav-link'>
          <i className='fas fa-align-left nav-icon'></i>
        </a>
        <a href='!#' className='nav-link'>
          <i className='fas fa-rss-square nav-icon'></i>
        </a>
        <div id='hide-nav-button' onClick={hideNav}>
          <i className='fas fa-arrow-circle-left'></i>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
