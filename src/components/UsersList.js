import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UsersList extends Component {
  render() {
    const users = [
      {
        id: 0,
        name: 'first user feauhfieah ifhauhfa',
        img: 'FU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        id: 1,
        name: 'second user',
        img: 'SU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        id: 2,
        name: 'third user',
        img: 'TU',
        createdAt: '9 Jan, 2018, 10:32',
      },
      {
        id: 3,
        name: 'fourth user',
        img: '4U',
        createdAt: '9 Jan, 2018, 10:32',
      },
    ];
    const usersLi = users.map((user, index) => {
      return (
        <UserInfo user={user} key={index}/>
      );
    });
    return (
      <div>
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
    );
  }
}

export default UsersList;