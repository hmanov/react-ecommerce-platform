import React from 'react';
import { Container } from '../../Styled/Container';
import { HeaderTop, SocialContainer, AwesomeIcon } from '../../Styled/Header';

import { faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <Container>
      <HeaderTop>
        <SocialContainer>
          <AwesomeIcon icon={faInstagram} hoverColor='#8a3ab9' />
          <AwesomeIcon icon={faYoutube} hoverColor='#c4302b' />
          <AwesomeIcon icon={faTwitter} hoverColor='#00acee' />
        </SocialContainer>
      </HeaderTop>
    </Container>
  );
};

export default Navbar;
