import styled from 'styled-components';
export const Filter = styled.select`
  max-width: 600px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.primary};
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.primary};
  }
`;
