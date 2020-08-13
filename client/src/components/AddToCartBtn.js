import React, { useState, useContext } from 'react';
import { FeaturedCardAddToCart } from '../Styled/Card';
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import productService from '../context/actions/productsActions';
import { addToCart } from '../context/actions/productTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
const AddToCartBtn = ({ _id, history }) => {
  const { authState } = useContext(AuthContext);
  const { productDispatch } = useContext(ProductContext);

  const addToCardHandler = async () => {
    if (!authState.isAuth) {
      history.push('/register');
    }
    const res = await productService.updateCartProducts(authState, _id, 1);

    productDispatch(addToCart(res));
  };
  return (
    <FeaturedCardAddToCart onClick={addToCardHandler}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px', zIndex: '5' }} />
      Add To Cart
    </FeaturedCardAddToCart>
  );
};

export default withRouter(AddToCartBtn);
