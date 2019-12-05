import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [navVisible, setNavVisible] = useState('block');

  const hideNav = () => {
    console.log('clicked');
    setNavVisible('none');
    console.log(navVisible);
  };

  return (
    <div id='sidenav-wrapper'>
      <div id='sidenav-logo-wrapper'>
        <i className='fas fa-angle-double-up'></i>
      </div>
      <div id='sidenav-links-wrapper'>
        <Link to='/' className='nav-link'>
          <i className='fas fa-home nav-icon'></i>
        </Link>
        <Link to='/shop' className='nav-link'>
          <i className='fas fa-shopping-bag nav-icon'></i>
        </Link>
        <Link to='/blog' className='nav-link'>
          <i className='fas fa-align-left nav-icon'></i>
        </Link>
        <Link to='/forum' className='nav-link'>
          <i className='fas fa-rss-square nav-icon'></i>
        </Link>
        <div id='hide-nav-button' onClick={hideNav}>
          <i className='fas fa-arrow-circle-left'></i>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
