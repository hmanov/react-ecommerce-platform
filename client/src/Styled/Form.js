import styled from 'styled-components';
export const FormContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Form = styled.form`
  position: relative;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  max-height: 600px;
  height: 500px;

  &:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    -webkit-box-shadow: -5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    box-shadow: -5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    h2 {
      color: ${(props) => props.theme.primary};
    }
    input {
      border-color: ${(props) => props.theme.primary};
      &::placeholder {
        color: ${(props) => props.theme.primary};
      }
    }
    button {
      background-color: ${(props) => props.theme.primary};
      color: white;
    }
  }
  &:nth-child(2) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    -webkit-box-shadow: 5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 6px 18px -5px rgba(0, 0, 0, 0.75);
    background-color: ${(props) => props.theme.primary};
    h2 {
      color: white;
    }
    input {
      border-color: white;
      &::placeholder {
        color: ${(props) => props.theme.primary};
      }
    }
    button {
      background-color: white;
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.dark};
  letter-spacing: 1px;
`;
export const FormInput = styled.input`
  box-sizing: border-box;

  padding: 15px;
  letter-spacing: 1px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.dark};
  &:not([type='radio']) {
    width: 80%;
  }
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
  letter-spacing: 2px;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.dark};
  cursor: pointer;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: red;
  }
`;
