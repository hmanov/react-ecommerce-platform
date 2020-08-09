import React, { useState, useContext, useEffect } from 'react';
import { Form, FormInput, FormTitle, FormButton, FormContainer } from '../../Styled/Form';
import { ContainerCenter } from '../../Styled/Container';
import { AuthContext } from '../../context/AuthProvider';
import { login, register } from '../../context/actions/authTypes';
import authService from '../../context/actions/authActions';

const Register = ({ history }) => {
  const { authState, authDispatch } = useContext(AuthContext);

  useEffect(() => {
    if (authState.isAuth) {
      history.push('/');
    }
  });
  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
  });

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const { email, firstName, lastName, password, repeatPassword } = registerFormData;
  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await authService.register(registerFormData);
    authDispatch(register(res));
  };
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await authService.login(loginFormData);
    authDispatch(login(res));
  };

  const registerOnChangeHandler = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };
  const loginOnChangeHandler = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <ContainerCenter>
      <FormContainer>
        <Form onSubmit={loginSubmitHandler}>
          <FormTitle>Login</FormTitle>
          <FormInput
            placeholder='Email'
            name='email'
            type='email'
            value={loginFormData.email}
            onChange={loginOnChangeHandler}
          />
          <FormInput
            placeholder='Password'
            name='password'
            type='password'
            value={loginFormData.password}
            onChange={loginOnChangeHandler}
          />

          <FormButton>Login</FormButton>
        </Form>
        <Form onSubmit={registerSubmitHandler}>
          <FormTitle>Register</FormTitle>
          <FormInput placeholder='Email' name='email' type='email' value={email} onChange={registerOnChangeHandler} />
          <FormInput placeholder='First Name' name='firstName' value={firstName} onChange={registerOnChangeHandler} />
          <FormInput placeholder='Last Name' name='lastName' value={lastName} onChange={registerOnChangeHandler} />
          <FormInput
            placeholder='Password'
            name='password'
            type='password'
            value={password}
            onChange={registerOnChangeHandler}
          />
          <FormInput
            placeholder='Reapeat Password'
            name='repeatPassword'
            type='password'
            value={repeatPassword}
            onChange={registerOnChangeHandler}
          />
          <FormButton>Register</FormButton>
        </Form>
      </FormContainer>
    </ContainerCenter>
  );
};

export default Register;
