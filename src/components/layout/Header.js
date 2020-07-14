import React from 'react';
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

const Header = () => {
  return (
    <HeaderTop>
      <SocialContainer>
        <AwesomeIcon icon={faInstagram} hovercolor='#8a3ab9' />
        <AwesomeIcon icon={faTwitter} hovercolor='#00acee' />
        <AwesomeIcon icon={faYoutube} hovercolor='#c4302b' />
      </SocialContainer>
      <ProfileContainer>
        <ShoppingCartLink>
          <AwesomeIcon icon={faShoppingCart} hovercolor='#eece1a' />
          <ShoppingCartCounter>1</ShoppingCartCounter>
        </ShoppingCartLink>
        <AwesomeIcon icon={faUser} hovercolor='#eece1a' />
      </ProfileContainer>
    </HeaderTop>
  );
};
export default Header;
