import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegister extends Component {
  render() {
    return (
      <div className="App-content Register">
        <section className="Content-header">
          <h1 className="Content-title">Register</h1>
          <div className="Register-pagination">
            <span className="pagination-icon visited">1</span>
            <span><hr className="pagination-separator"/></span>
            <span className="pagination-icon">2</span>
          </div>
        </section>
        <section className="Content-main">
          
        </section>
      </div>
    );
  }
}

export default UserRegister;