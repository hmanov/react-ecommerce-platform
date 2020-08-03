import React, { useContext } from 'react';
import { ProductListContainer } from '../Styled/ProductList';
import { ProductsContext } from '../context/ProductProvider';
const ProductList = () => {
  const { productState } = useContext(ProductsContext);
  return (
    <ProductListContainer>
      {productState.featured.map((e) => (
        <div></div>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
