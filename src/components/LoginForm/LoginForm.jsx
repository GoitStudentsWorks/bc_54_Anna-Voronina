import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { Formik } from 'formik';
import React from 'react';
import { loginSchema } from 'services/validation/validationLoginSchema';
import {
  FieldStyled,
  FormStyled,
  WrapperButton,
  WrapperField,
  WrapperForm,
} from './LoginForm.styled';
import { Logo } from 'components/Logo/Logo';
import { WrapperLogo } from 'components/Logo/Logo.styled';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  //const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    //dispatch(logIn(value));
    console.log(value);
    resetForm();
  };
  return (
    <WrapperLogo>
      <WrapperForm>
        <Logo />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={hendleSubmit}
        >
          <FormStyled autoComplete="off">
            <WrapperField>
              <FieldStyled
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="E-mail"
                required
              />
              <FormError name="email" />

              <FieldStyled
                type="pasword"
                name="password"
                title="Enter the password more difficult, letter, digit, capital letter."
                placeholder="Password"
                required
              />
              <FormError name="password" />
            </WrapperField>
            <WrapperButton>
              <Button type="submit" text="log in" />
              <Link to="/register">
                <Button text="register" variant="secondary" />
              </Link>
            </WrapperButton>
          </FormStyled>
        </Formik>
      </WrapperForm>
    </WrapperLogo>
  );
};
