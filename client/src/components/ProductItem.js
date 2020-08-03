import React from 'react';
import { ProductItemContainer } from '../Styled/ProductList';
import { AwesomeIcon } from '../Styled/Header';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
const ProductItem = ({ productData }) => {
  console.log(productData);
  return <h2>dd</h2>;
  // <ProductItemContainer>
  //   <h3>{productName}</h3>
  //   <h3>{price}</h3>
  //   <div>
  //     <AwesomeIcon icon={faEdit} />
  //     <AwesomeIcon icon={faTrash} />
  //   </div>
  // </ProductItemContainer>
};

export default ProductItem;
