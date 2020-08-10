import React, { useState } from 'react';
import { Filter as StyledFilter } from '../Styled/Filter';
const Filter = ({ getFilterValue, isSelected }) => {
  const categories = ['FullSize', 'TKL', '65%', '60%'];
  const [filterValue, setFilterValue] = useState('Filter');
  const [value, setValue] = useState();
  const onSelectHandler = (e) => {
    if (e.target.value === 'allProducts') {
      setFilterValue('Filter');
    } else {
      setFilterValue('All Products');
    }
    getFilterValue(e.target.value);
    setValue(e.target.value);
  };
  return (
    <StyledFilter onChange={onSelectHandler} value={isSelected ? 'allProducts' : value}>
      <option value='allProducts'>{filterValue}</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </StyledFilter>
  );
};

export default Filter;
