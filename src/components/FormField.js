import React, { Component } from 'react';

class FormField extends Component {
  constructor() {
    super();
    this.state = {
      isValid: true,
      errorMsg: ''
    }
  }
  
  handleInput = (event) => {
    const content = event.target.value.toLowerCase();
    const emailRegex = new RegExp(/[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9]+(\.[a-z0-9]+)+/);

    if (content.match(/[a-z]+/)) {
      switch (this.props.config.name) {
        case 'email':
          if (!content.match(emailRegex)) {
            this.setState({
              isValid: false,
              errorMsg: 'Email is not valid'
            });
            return;
          }
        case 'repeatPwd':
          if (content !== this.props.config.pwd) {
            this.setState({
              isValid: false,
              errorMsg: 'Passwords do not match'
            });
            return;
          }
        default:
      };
      this.setState({
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
        errorMsg: `${this.props.config.label} can't be blank`
      });
    }
    console.log(event.target);
  }

  render() {
    const config = this.props.config;
    return (
      <div className={config.isSection ? 'form-section' : ''}>
        <label htmlFor={config.name} className="form-label">{config.label}</label>
        <input type={config.type} name={config.name} className="form-input" placeholder={config.placeholder} onBlur={this.handleInput} />
        <i className={`form-validation-msg ${!this.state.isValid ? 'visible' : ''}`}>{this.state.errorMsg}</i>
      </div>
    );
  }
};

export default FormField;