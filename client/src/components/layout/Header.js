import React, { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderTop,
  SocialContainer,
  AwesomeIcon,
  ProfileContainer,
  ShoppingCartLink,
  ShoppingCartCounter,
} from '../../Styled/Header';
import { faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'styled-components';
import AuthMenu from '../layout/AuthMenu';
import { AuthContext } from '../../context/AuthProvider';
import { ProductContext } from '../../context/ProductProvider';
import { logout } from '../../context/actions/authTypes';

import { clearProductState } from '../../context/actions/productTypes';
import authService from '../../context/actions/authActions';

const Header = () => {
  const [isAuthMenuVisible, setIsAuthMenuVisible] = useState(false);

  const {
    authState: { isAuth },
    authDispatch,
  } = useContext(AuthContext);
  const {
    productState: { cart },
    productDispatch,
  } = useContext(ProductContext);

  const getCartItemsCount = () => cart.map((e) => e.count).reduce((a, b) => a + b, 0);
  const onBlurHandler = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && isAuthMenuVisible) {
        setIsAuthMenuVisible(!isAuthMenuVisible);
      }
    },
    [isAuthMenuVisible]
  );

  useEffect(() => {
    document.addEventListener('click', onBlurHandler, false);
    return () => {
      document.removeEventListener('click', onBlurHandler, false);
    };
  }, [onBlurHandler]);

  const theme = useContext(ThemeContext);
  const wrapperRef = useRef(null);

  let history = useHistory();

  const userHandler = () => {
    if (isAuth) {
      history.push('/profile');
    } else {
      setIsAuthMenuVisible(!isAuthMenuVisible);
    }
  };
  const logoutHnadler = () => {
    authService.logout();
    authDispatch(logout());
    productDispatch(clearProductState());
  };
  return (
    <HeaderTop onBlur={onBlurHandler} ref={wrapperRef}>
      <SocialContainer>
        <AwesomeIcon icon={faInstagram} hovercolor='#8a3ab9' />
        <AwesomeIcon icon={faTwitter} hovercolor='#00acee' />
        <AwesomeIcon icon={faYoutube} hovercolor='#c4302b' />
      </SocialContainer>
      {!isAuth && <AuthMenu isAuthMenuVisible={isAuthMenuVisible} />}
      <ProfileContainer>
        <ShoppingCartLink to='/cart'>
          <AwesomeIcon icon={faShoppingCart} hovercolor={theme.primary} />

          <ShoppingCartCounter>{isAuth ? getCartItemsCount() : 0}</ShoppingCartCounter>
        </ShoppingCartLink>

        <AwesomeIcon icon={faUser} hovercolor={theme.primary} onClick={userHandler} />
        {isAuth && <AwesomeIcon icon={faSignOutAlt} hovercolor={theme.primary} onClick={logoutHnadler} />}
      </ProfileContainer>
    </HeaderTop>
  );
};
export default Header;
