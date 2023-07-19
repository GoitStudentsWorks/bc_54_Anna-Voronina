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
import { Link } from 'react-router-dom';

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
    <div>
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
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="First name"
                required
              />
              <FormError name="username" />
              <FieldStyled
                type="email"
                name="email"
                title="Valid mail"
                placeholder="E-mail"
                required
              />
              <FormError name="email" />

              <FieldStyled
                type="password"
                name="password"
                title="enter the password more difficult, letter, digit, capital letter."
                placeholder="Password"
                required
              />
              <FormError name="password" />
              <FieldStyled
                type="password"
                name="confirmPassword"
                title="enter the password more difficult, letter, digit, capital letter."
                placeholder="ConfirmPassword"
                required
              />
              <FormError name="confirmPassword" />
            </WrapperField>
            <WrapperButton>
              <Button type="submit" text="register" />
              <Link to="/login">
                <Button type="submit" text="log in" variant="secondary" />
              </Link>
            </WrapperButton>
          </FormStyled>
        </Formik>
      </WrapperForm>
    </div>
  );
};
