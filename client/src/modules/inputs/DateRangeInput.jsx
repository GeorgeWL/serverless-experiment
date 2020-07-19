import React from 'react';
import './DateRangeInput.scss';
import BaseInput from './BaseInput';
import DateInput from './DateInput';
const DateRangeInput = ({ minDate, maxDate, onChange }) => (
  <div>
    <DateInput value={minDate} onChangeMin={onChange} id='minDate' />
    <DateInput value={maxDate} onChangeMin={onChange} id='maxDate' />
  </div>
);
export default DateRangeInput;
