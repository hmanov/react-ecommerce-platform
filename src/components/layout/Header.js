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
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'styled-components';
import AuthMenu from '../layout/AuthMenu';

const Header = () => {
  const [isAuthMenuVisible, setIsAuthMenuVisible] = useState(false);
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
  const isLogged = false;

  let history = useHistory();

  const userHandler = () => {
    if (isLogged) {
      history.push('/login');
    } else {
      setIsAuthMenuVisible(!isAuthMenuVisible);
    }
  };

  return (
    <HeaderTop onBlur={onBlurHandler} ref={wrapperRef}>
      <SocialContainer>
        <AwesomeIcon icon={faInstagram} hovercolor='#8a3ab9' />
        <AwesomeIcon icon={faTwitter} hovercolor='#00acee' />
        <AwesomeIcon icon={faYoutube} hovercolor='#c4302b' />
      </SocialContainer>
      {!isLogged && <AuthMenu isAuthMenuVisible={isAuthMenuVisible} />}
      <ProfileContainer>
        <ShoppingCartLink to='/cart'>
          <AwesomeIcon icon={faShoppingCart} hovercolor={theme.primary} />

          <ShoppingCartCounter>1</ShoppingCartCounter>
        </ShoppingCartLink>

        <AwesomeIcon icon={faUser} hovercolor={theme.primary} onClick={userHandler} />
      </ProfileContainer>
    </HeaderTop>
  );
};
export default Header;
