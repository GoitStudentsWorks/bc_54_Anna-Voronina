import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import { Formik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { loginSchema } from 'services/validation/validationLoginSchema';
import {
  EmailIcon,
  FieldStyled,
  FormStyled,
  PasswordlIcon,
  PasswordlIconLook,
  WrapperButton,
  WrapperField,
  WrapperForm,
  WrapperIcon,
  WrapperIcon2,
  WrapperIcon3,
} from './LoginForm.styled';
import { Logo } from 'components/Logo/Logo';

import { Link } from 'react-router-dom';
import { logInThunk } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { usePasswordToggle } from 'hook/usePasswordToggle';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const { showPassword1, togglePasswordVisibility1 } = usePasswordToggle();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    dispatch(logInThunk(value))
      .unwrap()
      .then(data => {
        toast.success(`You entered now owe us 1.000.000$ ${data.user.username}`);
      })
      .catch(error => {
        toast.error(error.message);
      });

    resetForm();
  };

  return (
    <WrapperForm>
      <Logo />
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={hendleSubmit}>
        <FormStyled autoComplete="off">
          <WrapperField>
            <WrapperIcon>
              <FieldStyled
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="E-mail"
                required
              />
              <EmailIcon />
            </WrapperIcon>
            <FormError name="email" />
            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled
                  type={showPassword1 ? 'text' : 'password'}
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  required
                />
                <PasswordlIcon />
              </WrapperIcon2>
              <PasswordlIconLook>
                {showPassword1 ? (
                  <FaEye onClick={togglePasswordVisibility1} />
                ) : (
                  <FaEyeSlash onClick={togglePasswordVisibility1} />
                )}
              </PasswordlIconLook>
            </WrapperIcon3>
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
  );
};
