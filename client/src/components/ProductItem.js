import React, { useContext } from 'react';
import { ProductItemContainer } from '../Styled/ProductList';
import { AwesomeIcon } from '../Styled/Header';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import { deleteProduct, setEditData } from '../context/actions/productTypes';
import productService from '../context/actions/productsActions';
const ProductItem = ({ productData: { productName, price, _id }, productData }) => {
  const { authState } = useContext(AuthContext);
  const { productDispatch } = useContext(ProductContext);
  const deleteHandler = async () => {
    const res = await productService.deleteProduct(_id, authState);
    productDispatch(deleteProduct(res));
  };
  return (
    <ProductItemContainer>
      <div>
        <h4>
          <strong>product: </strong>
          {productName}
        </h4>
        <span>{price}</span>
      </div>
      <div>
        <AwesomeIcon
          data-tip
          data-for='EditTip'
          onClick={productDispatch.bind(undefined, setEditData(productData))}
          icon={faEdit}
        />
        <AwesomeIcon data-tip data-for='DeleteTip' icon={faTrash} onClick={deleteHandler} />
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
