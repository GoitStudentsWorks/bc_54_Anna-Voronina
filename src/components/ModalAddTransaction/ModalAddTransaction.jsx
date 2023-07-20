import { Button } from 'components/Button/Button';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  getTransactionsCategoriesThunk,
} from 'redux/transaction/transactionOperations';
import { selectCategories } from 'redux/transaction/transactionSelectors';
import {
  ButtonWrapper,
  InputWrapper,
  ModalAddWrapper,
  StyledField,
  StyledForm,
} from './ModalAddTransaction.styled';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const allCategories = useSelector(selectCategories);
  const expenseCategories = allCategories.filter(
    category => category.type === 'EXPENCE'
  );
  const incomeCategories = allCategories.filter(
    category => category.type === 'INCOME'
  );

  const initialValues = {
    transactionDate: '',
    type: 'INCOME',
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    comment: '',
    amount: 0,
  };
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    const newData = {
      ...value,
      amount: Number(value.amount),
      type: value.type,
    };
    // dispatch(addTransactionThunk(newData));
    // resetForm();
  };
  return (
    <ModalAddWrapper>
      <h3>Add transaction</h3>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <StyledForm>
          <div>
            <span>Income</span>
            <span>
              <Field type="radio" name="type" id="INCOME" value="INCOME" />
              <Field type="radio" name="type" id="EXPENSE" value="EXPENSE" />
            </span>
            <span>Expense</span>
          </div>
          <InputWrapper>
            <StyledField
              type="number"
              name="amount"
              placeholder="0.00"
              weight="600"
            />
            <StyledField type="date" name="transactionDate" />
          </InputWrapper>
          <StyledField type="text" name="comment" placeholder="Comment" />
          <ButtonWrapper>
            <Button text="ADD" type="submit" />
            <Button text="CANCEL" variant="secondary" />
          </ButtonWrapper>
        </StyledForm>
      </Formik>
    </ModalAddWrapper>
  );
};
