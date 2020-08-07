import React from 'react';
import { ProductItemContainer } from '../Styled/ProductList';
import { AwesomeIcon } from '../Styled/Header';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
const ProductItem = ({ getEditData, productData: { productName, price, _id }, productData }) => {
  return (
    <ProductItemContainer>
      <div>
        <span>{productName}</span>
        <span>{price}</span>
        <span>{_id}</span>
      </div>
      <div>
        <AwesomeIcon data-tip data-for='EditTip' onClick={getEditData.bind(undefined, productData)} icon={faEdit} />
        <AwesomeIcon data-tip data-for='DeleteTip' icon={faTrash} />
        <ReactTooltip id='DeleteTip' place='bottom' type='info'>
          Delete Product
        </ReactTooltip>
        <ReactTooltip id='EditTip' place='bottom' type='info'>
          Edit Product
        </ReactTooltip>
      </div>
    </ProductItemContainer>
  );
};

export default ProductItem;
