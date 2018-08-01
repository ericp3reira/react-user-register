import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserRegister from './UserRegister';

class AppMain extends Component {
  render() {
    return (
      <main className="App-main">  
        <Switch>
          <Route exact path='/' component={UsersList} />
          <Route exact path='/users' component={UsersList} />
          <Route path='/register' component={UserRegister} />
          {/* <Route path='/user/:id' component={UserDetails} /> */}
        </Switch>
      </main>
    );
  }
}

export default AppMain;