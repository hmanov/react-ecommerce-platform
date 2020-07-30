import React, { useState, useContext } from 'react';
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
  const theme = useContext(ThemeContext);
  const isLogged = false;
  const [isAuthMenuVisible, setIsAuthMenuVisible] = useState(false);
  let history = useHistory();
  const userHandler = () => {
    if (isLogged) {
      history.push('/login');
    } else {
      setIsAuthMenuVisible(!isAuthMenuVisible);
    }
  };

  return (
    <HeaderTop>
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
