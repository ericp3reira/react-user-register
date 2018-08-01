import React from 'react';

const FormField = (props) => {
  const config = props.config;
  return (
    <div className={config.isSection ? 'form-section' : ''}>
      <label htmlFor={config.name} className="form-label">{config.label}</label>
      <input type="text" name={config.name} className="form-input" placeholder={config.placeholder} />
    </div>
  );
};

export default FormField;