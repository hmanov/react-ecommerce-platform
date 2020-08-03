import React, { useState } from 'react';
import { ShopTitle, Filter } from '../../Styled/ShopStyled';
import { ContainerCenter } from '../../Styled/Container';

const Shop = () => {
  const categories = ['Full Size', 'TKL', '65%', '60%'];
  const [filterValue, setFilterValue] = useState('Filter');
  const onSelectHandler = (e) => {
    if (e.target.value === 'allProducts') {
      setFilterValue('Filter');
    } else {
      setFilterValue('All Products');
    }
  };
  return (
    <ContainerCenter>
      <ShopTitle>PRODUCTS</ShopTitle>
      <Filter onChange={onSelectHandler}>
        <option value='allProducts'>{filterValue}</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </Filter>
    </ContainerCenter>
  );
};

export default Shop;
