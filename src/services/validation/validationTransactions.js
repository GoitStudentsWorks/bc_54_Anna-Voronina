import * as yup from 'yup';

export const transactionsSchema = yup.object().shape({
  amount: yup
    .number()
    .integer('Only integers are allowed')
    .positive('The number must be positive')
    .required('This field is required'),
});
