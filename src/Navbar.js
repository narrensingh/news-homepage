import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from './images/logo.svg';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbar__left">
        <img className="navbarleft_logo" src={logo} alt="logo" />
      </div>

      <div className="navbar__hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      {sidebarOpen && (
        <div className="navbar__sidebar" ref={sidebarRef}>
          <div className="navbar__sidebarHeader">
            <button className="navbar__sidebarClose" onClick={closeSidebar}>
              &times;
            </button>
          </div>
          <div className="navbar__sidebarLinks">
            <p>Home</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </div>
        </div>
      )}

      <div className="navbar__right">
        <p>Home</p>
        <p>Popular</p>
        <p>Trending</p>
        <p>Categories</p>
      </div>
    </div>
  );
};

export default Navbar;
