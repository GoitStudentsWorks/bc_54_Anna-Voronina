import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { Field, Formik } from 'formik';
import React from 'react';
import { loginSchema } from 'services/validation/validationLoginSchema';
import { FormStyled, WrapperButton, WrapperForm } from './LoginForm.styled';

export const LoginForm = () => {
  //const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    //dispatch(logIn(value));
    resetForm();
  };
  return (
    <WrapperForm>
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={hendleSubmit}>
        <FormStyled autoComplete="off">
          {/* <label>
            <span>Email</span> */}
          <Field
            type="text"
            name="email"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="email" />
          {/* </label> */}
          {/* <label>
            <span>Password</span> */}
          <Field
            type="tel"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes"
            required
          />
          <FormError name="password" />
          {/* </label> */}
          <WrapperButton>
            <Button type="submit" text="log in" />
            <Button type="submit" text="register" variant="secondary" />
          </WrapperButton>
        </FormStyled>
      </Formik>
    </WrapperForm>
  );
};
