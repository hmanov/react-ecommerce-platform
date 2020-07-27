import React, { useState } from 'react';
import { Form, FormInput } from '../../Styled/Form';
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
  });
  const { email, firstName, lastName, password, repeatPassword } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h2>Register</h2>
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
      <button>Register</button>
    </Form>
  );
};

export default Register;
