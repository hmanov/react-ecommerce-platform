import React, { useState, useContext } from 'react';
import { Form, FormInput, FormTitle, FormButton, FormContainer } from '../../Styled/Form';
import { register, login } from '../../context/actions/authActions';

import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
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
  const { authDispatch } = useContext(AuthContext);
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    register(authDispatch, registerFormData);
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login(authDispatch, registerFormData);
  };

  const registerOnChangeHandler = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };
  const loginOnChangeHandler = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <Form onSubmit={loginSubmitHandler}>
        <FormTitle>Login</FormTitle>
        <FormInput placeholder='Email' name='email' value={loginFormData.email} onChange={loginOnChangeHandler} />
        <FormInput
          placeholder='Password'
          name='password'
          value={loginFormData.password}
          onChange={loginOnChangeHandler}
        />

        <FormButton>Login</FormButton>
      </Form>
      <Form onSubmit={registerSubmitHandler}>
        <FormTitle>Register</FormTitle>
        <FormInput placeholder='Email' name='email' value={email} onChange={registerOnChangeHandler} />
        <FormInput placeholder='First Name' name='firstName' value={firstName} onChange={registerOnChangeHandler} />
        <FormInput placeholder='Last Name' name='lastName' value={lastName} onChange={registerOnChangeHandler} />
        <FormInput placeholder='Password' name='password' value={password} onChange={registerOnChangeHandler} />
        <FormInput
          placeholder='Reapeat Password'
          name='repeatPassword'
          value={repeatPassword}
          onChange={registerOnChangeHandler}
        />
        <FormButton>Register</FormButton>
      </Form>
    </FormContainer>
  );
};

export default Register;
