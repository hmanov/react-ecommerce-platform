import React, { useContext } from 'react';
import { SummaryContainer, Fi } from '../Styled/Cart';
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
          <div>
            <div></div>
            <div>{(e.count * products.filter((p) => p._id === e.itemId)[0].price).toFixed(2)}</div>
          </div>
        ))}
      <div>{totalPrice()}</div>
    </SummaryContainer>
  );
};

export default Summary;
