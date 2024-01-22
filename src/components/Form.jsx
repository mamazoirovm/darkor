import React from 'react';
import './Form.css';

const Form = ({ companyName, email, phoneNumber, onInputChange, isValid }) => {
  return (
    <div>
      <div className="form-content">
        <label htmlFor="">
          Kompaniya nomi
          <input
            type="text"
            value={companyName}
            onChange={(e) => onInputChange('companyName', e.target.value)}
            style={{ outlineColor: isValid.companyName ? '' : 'red' }}
          />
        </label>
        <label htmlFor="">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => onInputChange('email', e.target.value)}
            style={{ outlineColor: isValid.email ? '' : 'red' }}
          />
        </label>
        <label htmlFor="">
          Telefon raqami
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => onInputChange('phoneNumber', e.target.value)}
            style={{ outlineColor: isValid.phoneNumber ? '' : 'red' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Form;
