import { Button } from 'components/Button/Button';
import { FormError } from 'components/FormError/FormError';
import {
  FieldStyled,
  FormStyled,
  WrapperButton,
  WrapperField,
  WrapperForm,
} from 'components/LoginForm/LoginForm.styled';
import { Logo } from 'components/Logo/Logo';
import { Formik } from 'formik';

import { registerSchema } from 'services/validation/ValidationRegisteSchema';

export const RegisterForm = () => {
  //const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    //dispatch(logIn(value));
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
          onSubmit={hendleSubmit}
        >
          <FormStyled autoComplete="off">
            <WrapperField>
              <FieldStyled
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="First name"
                required
              />
              <FormError name="name" />
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
              <Button type="submit" text="log in" variant="secondary" />
            </WrapperButton>
          </FormStyled>
        </Formik>
      </WrapperForm>
    </div>
  );
};
