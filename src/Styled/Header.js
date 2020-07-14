import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const HeaderTop = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px yellow solid;
`;

export const SocialContainer = styled.div`
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  padding: 10px;
  transition: all 0.7s ease-in-out;
  &:hover {
    color: ${(props) => props.hoverColor && props.hoverColor};
    transform: rotate(360deg);
  }
`;
