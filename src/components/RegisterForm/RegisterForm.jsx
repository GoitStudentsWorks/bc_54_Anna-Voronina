import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { signUpThunk } from 'redux/auth/authOperations';
import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { Logo } from 'components/Logo/Logo';
import { registerSchema } from 'services/validation/validationRegisterSchema';
import {
  FieldStyled,
  FormStyled,
  WrapperButton,
  WrapperField,
  WrapperForm,
} from 'components/LoginForm/LoginForm.styled';

import { LinkStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    const { username, email, password } = value;
    dispatch(signUpThunk({ username, email, password }));
    console.log(value);
    resetForm();
  };

  return (
    <WrapperForm>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <WrapperField>
            <FieldStyled
              type="text"
              name="username"
              placeholder="First name"
              required
            />
            <FormError name="username" />
            <FieldStyled
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <FormError name="email" />

            <FieldStyled
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FormError name="password" />
            <FieldStyled
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <FormError name="confirmPassword" />
          </WrapperField>
          <WrapperButton>
            <Button type="submit" text="register" />
            <LinkStyled to="/login">Log in</LinkStyled>
          </WrapperButton>
        </FormStyled>
      </Formik>
    </WrapperForm>
  );
};
