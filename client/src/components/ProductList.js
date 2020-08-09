import React, { useContext } from 'react';
import { ProductListContainer } from '../Styled/ProductList';
import { ProductContext } from '../context/ProductProvider';
import Productitem from './ProductItem';
import { Loader } from '../Styled/Loader';
const ProductList = () => {
  const {
    productState: { products, isLoading },
  } = useContext(ProductContext);

  return (
    <ProductListContainer>
      {isLoading ? <Loader marginTop='0px' /> : products.map((e, i) => <Productitem productData={e} key={i} />)}
    </ProductListContainer>
  );
};

export default ProductList;
