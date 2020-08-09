import React, { useContext } from 'react';
import { ProductListContainer } from '../Styled/ProductList';
import { ProductContext } from '../context/ProductProvider';
import Productitem from './ProductItem';
const ProductList = () => {
  const { productState } = useContext(ProductContext);
  return (
    <ProductListContainer>
      {productState.products.map((e, i) => (
        <Productitem productData={e} key={i} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
