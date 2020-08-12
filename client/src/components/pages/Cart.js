import React from 'react';
import { CartContainer, ItemContainer } from '../../Styled/Cart';
import CartItem from '../CartItem';
const Cart = () => {
  return (
    <CartContainer>
      <ItemContainer>
        <CartItem />
      </ItemContainer>
    </CartContainer>
  );
};

export default Cart;
