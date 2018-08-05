import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserRegisterData from './UserRegisterData';
import UserRegisterImg from './UserRegisterImg';

class UserRegister extends Component {
  constructor({match}, props) {
    super();
    this.match = match;
  }

  render() {
    return (
      <div className="App-content Register">
        <Switch>
          <Route path={`${this.match.url}/1`} component={UserRegisterData} />
          <Route path={`${this.match.url}/2`} component={UserRegisterImg} />
        </Switch>
      </div>
    );
  }
}

export default UserRegister;