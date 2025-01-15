import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';

const Outerwear = () => {
  const [navbarTap, setNavbarTap] = useState("WOMEN");

  const TabHandlerNavbar = (tab) => {
    setNavbarTap(tab);
  };
  return (
    <div>
      <Header navbarTap={navbarTap} onTabClick={TabHandlerNavbar} />
      <NavBar navbarTap={navbarTap} />
    </div>
  );
};

export default Outerwear;
