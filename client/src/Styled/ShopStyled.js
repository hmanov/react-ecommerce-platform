import styled from 'styled-components';

export const ShopTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
  font-size: 2em;
  letter-spacing: 2px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Filter = styled.select`
  max-width: 400px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.primary};
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.primary};
  }
`;
