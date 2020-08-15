import React, { useState, useContext } from 'react';
import { Filter as StyledFilter } from '../Styled/Filter';
import { ProductContext } from '../context/ProductProvider';
import { filter } from '../context/actions/productTypes';
const Filter = () => {
  const categories = ['FullSize', 'TKL', '65%', '60%'];
  const [filterValue, setFilterValue] = useState('Filter');
  const [value, setValue] = useState();
  const { productDispatch } = useContext(ProductContext);
  const onSelectHandler = (e) => {
    const value = e.target.value;
    if (value === 'allProducts') {
      setFilterValue('Filter');
    } else {
      setFilterValue('All Products');
    }
    setValue(value);
    productDispatch(filter(value));
  };
  return (
    <StyledFilter onChange={onSelectHandler} value={value !== 'fliter' ? value : 'allProducts'}>
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
