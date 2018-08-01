import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';

class UserRegister extends Component {
  render() {
    const fields = [
      {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'John',
        isSection: true,
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Michael',
        isSection: true,
      },
      {
        name: 'companyName',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Apple Inc',
      },
      {
        name: 'email',
        type: 'text',
        label: 'Email',
        placeholder: 'name@company.com',
      },
      {
        name: 'pwd',
        type: 'password',
        label: 'Password',
        placeholder: '',
        isSection: true,
      },
      {
        name: 'repeatPwd',
        type: 'password',
        label: 'Repeat password',
        placeholder: '',
        isSection: true,
      },
    ];
    const formFields = fields.map((field) => {
      return <FormField config={field} />;
    });
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
          <form className="Register-form" action="">
            {formFields}
          </form>
        </section>
      </div>
    );
  }
}

export default UserRegister;