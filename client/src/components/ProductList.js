import React, { useContext, useState } from 'react';
import { ProductListContainer } from '../Styled/ProductList';
import { ProductsContext } from '../context/ProductProvider';
import Productitem from './ProductItem';
const ProductList = ({ getEditData }) => {
  const { productState } = useContext(ProductsContext);
  console.log(productState.products);
  return (
    <ProductListContainer>
      {productState.products.map((e, i) => (
        <Productitem productData={e} key={i} getEditData={getEditData} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
