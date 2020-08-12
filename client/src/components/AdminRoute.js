import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Route, Redirect } from 'react-router-dom';
const AdminRoute = ({ adminRights, component: Component, ...rest }) => {
  const {
    authState: {
      user: { isAdmin },
    },
  } = useContext(AuthContext);
  console.log(isAdmin);
  return <Route {...rest} render={(props) => (isAdmin ? <Component {...props} /> : <Redirect to='/register' />)} />;
};

export default AdminRoute;
