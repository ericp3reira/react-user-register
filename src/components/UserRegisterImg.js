import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegisterImg extends Component {
  render() {
    return (
      <div>
        <section className="Content-header register-img-title">
          <h1 className="Content-title">Profile photo</h1>
        </section>
        <section className="Content-main">
          <div className="Register-img">
            <span>
              Click to upload your profile image
            </span>
          </div>
          <div className="Register-img-footer">
            <Link to="/users/new/1" className="form-goback"><span>&lt; </span>Voltar</Link>
            <button className="form-btn">FINISH<span>❯</span></button>
            <span className="form-goback"></span>
          </div>
        </section>
      </div>
    );
  }
}

export default UserRegisterImg;