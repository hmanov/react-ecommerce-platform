import React, { useState, useContext } from 'react';
import { Form, FormInput, FormTitle, FormButton } from '../../Styled/Form';
import { register } from '../../context/actions/authActions';

import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
  });
  const { email, firstName, lastName, password, repeatPassword } = formData;
  const { authState, authDispatch } = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    register(authDispatch, formData);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormTitle>Registration Form</FormTitle>
      <FormInput placeholder='Email' name='email' value={email} onChange={onChangeHandler} />
      <FormInput placeholder='First Name' name='firstName' value={firstName} onChange={onChangeHandler} />
      <FormInput placeholder='Last Name' name='lastName' value={lastName} onChange={onChangeHandler} />
      <FormInput placeholder='Password' name='password' value={password} onChange={onChangeHandler} />
      <FormInput
        placeholder='Reapeat Password'
        name='repeatPassword'
        value={repeatPassword}
        onChange={onChangeHandler}
      />
      <FormButton>Register</FormButton>
    </Form>
  );
};

export default Register;
