import * as yup from 'yup';

export const transactionsSchema = yup.object().shape({
  amount: yup
    .number()
    .positive('The sum number must be positive')
    .required('This field is required'),
});
