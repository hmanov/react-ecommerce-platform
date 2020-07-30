import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 30px;
  max-width: 400px;
  width: 100%;
  max-height: 600px;
  height: 500px;
  margin-top: 100px;
  border-radius: 10px;

  -webkit-box-shadow: 3px 7px 29px 3px rgba(72, 72, 72, 1);
  -moz-box-shadow: 3px 7px 29px 3px rgba(72, 72, 72, 1);
  box-shadow: 3px 7px 29px 3px rgba(72, 72, 72, 1);
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.dark};
`;
export const FormInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  padding: 15px;
  letter-spacing: 1px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.dark};

  &:focus {
    outline: ${(props) => props.theme.primary} auto 1px;
  }
  &::placeholder {
    color: ${(props) => props.theme.dark};
    font-size: 14px;
  }
`;
export const FormButton = styled.button`
  margin-top: 20px;
  width: 140px;
  height: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${(props) => props.theme.dark};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  background: linear-gradient(to right, ${(props) => props.theme.dark} 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-position: left bottom;
  }
`;
