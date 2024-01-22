import React from 'react';

const Company = ({ location, employeeCount, comment, onInputChange, isValid, onNextButtonClick }) => {
  return (
    <div>
      <div className="jobs">
        <label htmlFor="">
          Yasash joyi
          <input
            type="text"
            value={location}
            onChange={(e) => onInputChange('location', e.target.value)}
            style={{ outlineColor: isValid.location ? '' : 'red' }}
          />
        </label>
        <label htmlFor="">
          Hodimlar soni
          <input
            type="text"
            value={employeeCount}
            onChange={(e) => onInputChange('employeeCount', e.target.value)}
            style={{ outlineColor: isValid.employeeCount ? '' : 'red' }}
          />
        </label>
        <label htmlFor="">
          Izoh
          <textarea
            value={comment}
            onChange={(e) => onInputChange('comment', e.target.value)}
            style={{ outlineColor: isValid.comment ? '' : 'red' }}
          ></textarea>
        </label>
      </div>
      <div className="btn-group">
        <button>ortga</button>
        <button className='blue' onClick={onNextButtonClick}>
          keyingisi
        </button>
      </div>
    </div>
  );
};

export default Company;
