import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
`;
export const ContactItem = styled.div`
  width: 90%;
  padding: 10px 20px;
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
`;
