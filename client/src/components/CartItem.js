import React, { useContext } from 'react';
import { Item, ItemImg, Field } from '../Styled/Cart';
import { ProductContext } from '../context/ProductProvider';
import { AuthContext } from '../context/AuthProvider';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AwesomeIcon } from '../Styled/Header';
import productService from '../context/actions/productsActions';
import { addToCart } from '../context/actions/productTypes';

const CartItem = ({ data }) => {
  const {
    productState: { products },
    productDispatch,
  } = useContext(ProductContext);

  const { authState } = useContext(AuthContext);

  const changeQuantity = async (quantity) => {
    const cart = await productService.updateCartProducts(authState, data.itemId, quantity);
    productDispatch(addToCart(cart));
  };
  const removeItemfromCart = async () => {
    const res = await productService.removeCartProduct(authState, data.itemId);
    productDispatch(addToCart(res));
  };
  const item = products.filter((e) => e._id === data.itemId);

  const { imageURL, productName, price } = item.length > 0 ? item[0] : {};
  console.log(imageURL);
  return (
    <Item>
      <Field>
        <ItemImg src={imageURL} />
        <div>{productName} </div>
      </Field>
      <Field>
        <AwesomeIcon icon={faMinus} onClick={changeQuantity.bind(undefined, -1)} />
        <div> {data.count}</div>
        <AwesomeIcon icon={faPlus} onClick={changeQuantity.bind(undefined, 1)} />
      </Field>
      <Field>$ {price !== undefined && price.toFixed(2)}</Field>
      <Field>${price !== undefined && (price * data.count).toFixed(2)}</Field>
      <Field>
        <AwesomeIcon icon={faTimes} onClick={removeItemfromCart} />
      </Field>
    </Item>
  );
};

export default CartItem;
