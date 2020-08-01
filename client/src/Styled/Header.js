import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export const HeaderTop = styled.div`
  max-width: 1200px;
  width: 95%;
  height: 50px;
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px ${(props) => props.theme.primary} solid;
  z-index: 6;
  @media (max-width: 600px) {
    justify-content: space-evenly;
  }
`;

export const SocialContainer = styled.div`
  position: relative;

  height: 50px;
  justify-content: start;
  align-items: center;
  z-index: 99;
`;
export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: -150px;
  margin-top: ${(props) => (props.isAuthMenuVisible ? '0px' : '-150px')};
  transition: all 0.3s ease-out;
  color: ${(props) => props.theme.dark};
  padding-bottom: 10px;
  @media (max-width: 460px) {
  }
`;
export const ProfileContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  padding: 10px;
  color: ${(props) => props.theme.dark};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor && props.hovercolor};
    padding: 5.5px;
    font-size: 35px;
  }
  @media (max-width: 460px) {
    font-size: 20px;
    &:hover {
      font-size: 35px;
    }
  }
`;

export const NavContainer = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const NavLinksContainer = styled.div`
  position: relative;
  z-index: 3;

  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;
export const NavLogo = styled(Link)`
  color: ${(props) => props.theme.primary};
  z-index: 1;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 40px;
  line-height: 50px;
  font-weight: 600;

  font-style: italic;
  letter-spacing: 0px;
  cursor: pointer;
`;
export const NavigationLink = styled(Link)`
  position: relative;
  z-index: 3;
  padding: 10px 5px;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.2s ease-in;
  color: ${(props) => props.theme.dark};

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
export const AuthLink = styled(NavigationLink)`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.primary};
`;
export const ShoppingCartLink = styled(Link)`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const ShoppingCartCounter = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  background-color: ${(props) => props.theme.primary};
  font-weight: bold;
  right: 0;
  border-radius: 50%;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
