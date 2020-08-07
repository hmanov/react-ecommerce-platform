import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { clearErrors } from '../context/actions/authTypes';
import { ErrorMessage } from '../Styled/Error';
const Error = () => {
  const {
    authState: { authErrors },
    authDispatch,
  } = useContext(AuthContext);

  if (authErrors.length) {
    setTimeout(() => {
      authDispatch(clearErrors());
    }, 5000);
  }

  return (
    <div style={{ position: 'absolute', top: '-50px' }}>
      {authErrors.map((err, i) => (
        <ErrorMessage key={i}>{err.msg}</ErrorMessage>
      ))}
    </div>
  );
};

export default Error;
