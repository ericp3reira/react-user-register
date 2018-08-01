import React, { Component } from 'react';
import './styles/App.css';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />        
        <AppMain />
      </div>
    );
  }
}

export default App;
