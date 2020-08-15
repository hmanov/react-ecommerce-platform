import React, { useState, useContext, useEffect } from 'react';
import { Form, FormInput, FormTitle, FormButton, FormContainer } from '../../Styled/Form';
import { ContainerCenter } from '../../Styled/Container';
import { AuthContext } from '../../context/AuthProvider';
import { login, register as registerFunc } from '../../context/actions/authTypes';
import authService from '../../context/actions/authActions';
import { useForm } from 'react-hook-form';

const Register = ({ history }) => {
  const { authState, authDispatch } = useContext(AuthContext);
  const { register, handleSubmit, watch, errors } = useForm();
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

  const { email, firstName, lastName, password, repeatPassword } = registerFormData;
  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await authService.register(registerFormData);
    authDispatch(registerFunc(res));
  };
  const loginSubmitHandler = async (e) => {
    const res = await authService.login(e);
    authDispatch(login(res));
  };

  const registerOnChangeHandler = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };

  return (
    <ContainerCenter>
      <FormContainer>
        <Form onSubmit={handleSubmit(loginSubmitHandler)}>
          <FormTitle>Login</FormTitle>
          <FormInput
            placeholder='Email'
            name='email'
            type='email'
            // onChange={loginOnChangeHandler}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />{' '}
          {errors.email && <span>Email is required</span>}
          <FormInput
            placeholder='Password'
            name='password'
            type='password'
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && <span>6 char password required</span>}
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
