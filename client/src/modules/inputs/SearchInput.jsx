import React from 'react';
const SearchInput = ({ value, onChange }) => (
  <BaseInput type='search' value={value} onChange={onChange} />
);
export default SearchInput;
