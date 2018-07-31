import React, { Component } from 'react';
import logo from './assets/imgs/logo.png';
import './styles/App.css';

class App extends Component {
  render() {
    const users = [
      {
        name: 'first user feauhfieah ifhauhfa',
        img: 'FU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        name: 'second user',
        img: 'SU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        name: 'third user',
        img: 'TU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        name: 'fourth user',
        img: '4U',
        createdAt: '9 Jan, 2018, 10:32',
      },
    ];
    const usersLi = users.map((user, index) => {
      return (
        <li key={index}>
          <div className="Users-list-name">
            <span className="Users-list-img">{user.img}</span>
            {user.name}
          </div>
          <div className="Users-list-date">
            {user.createdAt}
          </div>
        </li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Conpass Logo" className="App-logo" />
        </header>
        <main className="App-main">
          <div className="App-content">
            <section className="Content-header">
              <h1 className="Content-title">Users</h1>
              <input type="button" className="Content-btn" value="Add new user"/>
            </section>
            <section className="Content-main">
              <ul className="Users-list">
                <li className="list-header">
                  <div>Full Name</div>
                  <div className="Users-list-date">Created at <span className="sort-icon">&#x25BC;</span></div>
                </li>
                {usersLi}
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
