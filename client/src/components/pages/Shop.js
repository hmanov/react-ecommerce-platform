import React, { useState } from 'react';
import { ShopTitle } from '../../Styled/ShopStyled';
import { ContainerCenter } from '../../Styled/Container';
import Filter from '../Filter';
const Shop = () => {
  return (
    <ContainerCenter>
      <ShopTitle>PRODUCTS</ShopTitle>
      <Filter />
    </ContainerCenter>
  );
};

export default Shop;
