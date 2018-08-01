import React, { Component } from 'react';
import UsersList from './UsersList';

class AppMain extends Component {
  render() {
    return (
      <div className="App-content">
        <UsersList />
      </div>
    );
  }
}

export default AppMain;