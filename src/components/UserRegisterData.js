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
        placeholder: 'i.e John',
        isSection: true,
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'i.e Michael',
        isSection: true,
      },
      {
        name: 'companyName',
        type: 'text',
        label: 'Company Name',
        placeholder: 'i.e Apple Inc',
      },
      {
        name: 'email',
        type: 'text',
        label: 'Email',
        placeholder: 'i.e name@company.com',
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
    const formFields = fields.map((field, i) => {
      return <FormField key={i} config={field} />;
    });
    return (
      <div>
        <section className="Content-header">
          <h1 className="Content-title">Register</h1>
          <div className="Register-pagination">
            <span className="pagination-icon visited">1</span>
            <span><hr className="pagination-separator"/></span>
            <span className="pagination-icon">2</span>
          </div>
        </section>
        <section className="Content-main">
          <div className="Register-form">
            {formFields}
            <Link to="/users/new/2">
              <button className="form-btn">NEXT STEP<span>❯</span></button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default UserRegister;