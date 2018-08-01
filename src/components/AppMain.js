import React, { Component } from 'react';
import UsersList from './UsersList';
import UserRegister from './UserRegister';

class AppMain extends Component {
  render() {
    return (
      <main className="App-main">  
        <div className="App-content">
          <UsersList />
        </div>
      </main>
    );
  }
}

export default AppMain;