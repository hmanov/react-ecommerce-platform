import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export const HeaderTop = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px #eece1a solid;
  z-index: 1;
`;

export const SocialContainer = styled.div`
  height: 50px;
  width: 50%;

  justify-content: start;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  padding: 10px;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${(props) => props.hovercolor && props.hovercolor};
    padding: 5.5px;
    font-size: 35px;
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLinksContainer = styled.div`
  z-index: 1;
`;
export const NavLogo = styled(Link)`
  color: #eece1a;
  z-index: 1;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 50px;
  line-height: 50px;
  font-weight: 500;

  font-style: italic;
  letter-spacing: 0px;
  cursor: pointer;
`;
export const NavigationLink = styled(Link)`
  padding: 10px;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.8s ease-in-out;
  color: white;

  &:hover {
    color: #eece1a;
  }
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
  background-color: #eece1a;
  font-weight: bold;
  right: 0;
  border-radius: 50%;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
