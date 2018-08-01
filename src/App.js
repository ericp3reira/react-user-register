import React, { Component } from 'react';
import logo from './assets/imgs/logo.png';
import './styles/App.css';

import AppMain from './components/AppMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Conpass Logo" className="App-logo" />
        </header>
        <main className="App-main">          
          <AppMain />
        </main>
      </div>
    );
  }
}

export default App;
