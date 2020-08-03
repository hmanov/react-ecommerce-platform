import React from 'react';
import { ProductItem } from '../Styled/ProductList';

const ProductItem = ({ productData: { productName, _id, price } }) => {
  return (
    <ProductItem>
      <h3>{productName}</h3>
      <h3>{price}</h3>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </ProductItem>
  );
};

export default ProductItem;
