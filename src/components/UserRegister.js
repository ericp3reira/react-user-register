import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegister extends Component {
  render() {
    return (
      <div>
        <section className="Content-header">
          <h1 className="Content-title">Register</h1>
          <Link to='/users'>
            <input type="button" className="Content-btn" value="Add new user"/>
          </Link>
        </section>
      </div>
    );
  }
}

export default UserRegister;