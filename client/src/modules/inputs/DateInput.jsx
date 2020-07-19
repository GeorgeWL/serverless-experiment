import React from 'react';
import './DateInput.scss';
import BaseInput from './BaseInput';
const DateInput = ({ value, onChange, id }) => (
  <BaseInput id={id} type='date' format='dd/mm/yy HH:mm' value={value} onChangeMin={onChange} />
);
export default DateInput;
