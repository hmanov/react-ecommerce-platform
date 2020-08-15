import React, { useState, useContext } from 'react';
import { Form, FormInput, FormTitle, FormButton, ButtonContainer } from '../../Styled/Form';
import { ProductContext } from '../../context/ProductProvider';
import { AuthContext } from '../../context/AuthProvider';
import productService from '../../context/actions/productsActions';
import { addToCart } from '../../context/actions/productTypes';
import { withRouter } from 'react-router-dom';
const Checkout = ({ history }) => {
  const { productDispatch } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const [isSubmited, setIsSubmited] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmited(true);
    const res = await productService.clearCart(authState);
    productDispatch(addToCart(res));
    setTimeout(() => {
      history.push('/');
    }, 3000);
  };
  return (
    <div style={{ margin: 'auto', width: '600px' }}>
      {!isSubmited ? (
        <Form style={{ maxWidth: '400px' }} onSubmit={submitHandler}>
          <FormTitle>Shipping Details</FormTitle>
          <FormInput type='text' placeholder='Shipping Address' name='Shipping Adress' />
          <FormInput type='text' placeholder='Phone' name='phone' />

          <ButtonContainer>
            <FormButton>submit</FormButton>
          </ButtonContainer>
        </Form>
      ) : (
        <h2>Thank you for your purchase</h2>
      )}
    </div>
  );
};

export default withRouter(Checkout);
