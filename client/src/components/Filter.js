import React, { useState } from 'react';
import { Filter as StyledFilter } from '../Styled/Filter';
const Filter = ({ getFilterValue }) => {
  const categories = ['Full Size', 'TKL', '65%', '60%'];
  const [filterValue, setFilterValue] = useState('Filter');
  const onSelectHandler = (e) => {
    if (e.target.value === 'allProducts') {
      setFilterValue('Filter');
    } else {
      setFilterValue('All Products');
    }
    getFilterValue(e.target.value);
  };
  return (
    <StyledFilter onChange={onSelectHandler}>
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
