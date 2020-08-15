import React, { useContext } from 'react';
import { ProductListContainer } from '../Styled/ProductList';
import { ProductContext } from '../context/ProductProvider';
import Productitem from './ProductItem';
import { Loader } from '../Styled/Loader';
const ProductList = () => {
  const {
    productState: { isLoading, filteredData },
  } = useContext(ProductContext);

  return (
    <ProductListContainer>
      {isLoading ? <Loader marginTop='0px' /> : filteredData.map((e, i) => <Productitem productData={e} key={i} />)}
    </ProductListContainer>
  );
};

export default ProductList;
