import React from 'react';
import { AuthContainer, AuthLink } from '../../Styled/Header';
const AuthMenu = ({ isAuthMenuVisible }) => {
  return (
    <AuthContainer isAuthMenuVisible={isAuthMenuVisible}>
      <AuthLink to='/register'>Login | Register</AuthLink>
    </AuthContainer>
  );
};

export default AuthMenu;
