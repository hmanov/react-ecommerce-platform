import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import { clearErrors } from '../context/actions/authTypes';
import { clearErrors as clearProductErrors } from '../context/actions/productTypes';
import { ErrorMessage } from '../Styled/Error';
const Error = () => {
  const {
    productState: { productErrors },
    productDispatch,
  } = useContext(ProductContext);
  const {
    authState: { authErrors },
    authDispatch,
  } = useContext(AuthContext);

  if (productErrors.length || authErrors.length) {
    setTimeout(() => {
      productDispatch(clearProductErrors());
      authDispatch(clearErrors());
    }, 5000);
  }

  return (
    <div style={{ position: 'absolute', top: '65px' }}>
      {[...productErrors, ...authErrors].map((err, i) => (
        <ErrorMessage key={i}>{err.msg}</ErrorMessage>
      ))}
    </div>
  );
};

export default Error;
