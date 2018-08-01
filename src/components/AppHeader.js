import React from 'react';

import logo from '../assets/imgs/logo.png';

const AppHeader = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="Conpass Logo" className="App-logo" />
    </header>
  );
};

export default AppHeader;