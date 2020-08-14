import React, { useContext } from 'react';
import { CartContainer, ItemContainer, SummaryContainer } from '../../Styled/Cart';
import CartItem from '../CartItem';
import { ProductContext } from '../../context/ProductProvider';
import Loading from '../Loading';
import Summary from '../Summary';
const Cart = () => {
  const {
    productState: { cart, isLoading },
  } = useContext(ProductContext);

  return (
    <CartContainer>
      <ItemContainer>
        {cart.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px' }}>
            <strong>Product</strong> <strong>Quantity</strong> <strong>Price</strong> <strong>Total Price</strong>
            <strong>Remove Item</strong>
          </div>
        ) : (
          <h2>Cart is Empty</h2>
        )}
        {isLoading ? <Loading /> : cart.map((e) => <CartItem data={e} key={e._id} />)}
      </ItemContainer>
      <Summary />
    </CartContainer>
  );
};

export default Cart;
