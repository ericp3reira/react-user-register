import React, { Component } from 'react';
import logo from './assets/imgs/logo.png';
import './styles/App.css';

class App extends Component {
  render() {
    const users = [
      {
        name: 'first user',
        img: '3237539kfnehf398h.png',
        createdAt: Date.now(),
      },
      {
        name: 'second user',
        img: '938thfnsgu3g0.png',
        createdAt: Date.now(),
      },
      {
        name: 'third user',
        img: '3092uifnlksg03.png',
        createdAt: Date.now(),
      },
      {
        name: 'fourth user',
        img: '30ugnslkgmsp.png',
        createdAt: Date.now(),
      },
    ];
    const usersLi = users.map((user) => {
      return (
        <li>
          <div>
            <span>{user.img}</span>
            <span>{user.name}</span>
          </div>
          <div>
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
            <section>
              <h1>Users</h1>
              <button>Add new users</button>
            </section>
            <section>
              <ul>
                <li>
                  <div>Full Name</div>
                  <div>Created at</div>
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
