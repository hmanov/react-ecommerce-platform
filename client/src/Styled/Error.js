import styled from 'styled-components';

export const ErrorMessage = styled.p`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  background-color: ${(props) => props.theme.dark};
  color: white;
`;
