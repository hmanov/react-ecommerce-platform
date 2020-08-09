import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { isAuth },
  } = useContext(AuthContext);
  return (
    <Route {...rest} render={(props) => (isAuth === true ? <Component {...props} /> : <Redirect to='/register' />)} />
  );
};

export default PrivateRoute;
