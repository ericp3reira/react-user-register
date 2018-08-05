import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

const AppHeader = () => {
  return (
    <header className="App-header">
      <Link to="/users">
        <img src={logo} alt="Conpass Logo" className="App-logo" />
      </Link>
    </header>
  );
};

export default AppHeader;