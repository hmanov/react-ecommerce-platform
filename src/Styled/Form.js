import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 30px;
  max-width: 500px;
  width: 100%;
  max-height: 600px;
  height: 500px;
  margin-top: 100px;
  border: 1px solid ${(props) => props.theme.primary};
  background-color: rgba(68, 68, 68, 0.4);
`;
export const FormInput = styled.input`
  width: 90%;
  padding: 10px;

  &:focus {
    outline: ${(props) => props.theme.primary} auto 1px;
  }
  &::placeholder {
    color: black;
    font-size: 14px;
  }
`;
