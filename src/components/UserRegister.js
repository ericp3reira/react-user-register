import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserRegisterData from './UserRegisterData';
import UserRegisterImg from './UserRegisterImg';

class UserRegister extends Component {
  render() {
    return (
      <div className="App-content Register">
        <Switch>
          <Route exact path='/users/new/1' component={UserRegisterData} />
          <Route exact path='/users/new/2' component={UserRegisterImg} />
        </Switch>
      </div>
    );
  }
}

export default UserRegister;