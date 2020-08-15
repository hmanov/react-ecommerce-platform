import React, { useContext } from 'react';
import { SummaryContainer, SummaryItem, TotalPrice, CheckOut } from '../Styled/Cart';
import { ProductContext } from '../context/ProductProvider';
const Summary = () => {
  const {
    productState: { products, cart },
  } = useContext(ProductContext);
  const totalPrice = () =>
    cart
      .map((e) => ({ count: e.count, price: products.filter((c) => c._id === e.itemId)[0].price }))
      .reduce((a, b) => a + b.count * b.price, 0)
      .toFixed(2);

  return (
    <SummaryContainer>
      {cart.length > 0 &&
        products.length > 0 &&
        cart.map((e) => (
          <SummaryItem key={e.itemId}>
            <div style={{ flex: '0 0 50%' }}>{products.filter((p) => p._id === e.itemId)[0].productName}</div>
            <div>Qty: {e.count}</div>
            <div>${(e.count * products.filter((p) => p._id === e.itemId)[0].price).toFixed(2)}</div>
          </SummaryItem>
        ))}

      <TotalPrice>
        {' '}
        <small>TOTAL: </small> {'  '}${cart.length > 0 && products.length > 0 && totalPrice()}
      </TotalPrice>
      <CheckOut>CheckOut</CheckOut>
    </SummaryContainer>
  );
};

export default Summary;
