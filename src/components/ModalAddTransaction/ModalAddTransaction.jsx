import { Button } from 'components/Button/Button';
import { Field, Form, Formik } from 'formik';
import { ModalAddWrapper } from './ModalAddTransaction.styled';

export const ModalAddTransaction = () => {
  const initialValue = {
    count: '',
    date: '',
    comment: '',
  };
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };
  return (
    <ModalAddWrapper>
      <h3>Add transaction</h3>
      <div>
        <span>Income</span>
        <span></span>
        <span>Expense</span>
      </div>
      <Formik onSubmit={handleSubmit} initialValue={initialValue}>
        <Form>
          <Field type="number" name="count" />
          <Field type="data" name="date" />
          <Field type="text" name="comment" />
          <Button text="ADD" type="submit" />
          <Button text="CANCEL" variant="secondary" />
        </Form>
      </Formik>
    </ModalAddWrapper>
  );
};
