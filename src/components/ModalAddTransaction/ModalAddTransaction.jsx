import { Button } from 'components/Button/Button';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
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
  const [selectedOption, setSelectedOption] = useState('Car');
  const [selectedType, setSelectedType] = useState('INCOME');
  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const allCategories = useSelector(selectCategories);
  const expenseCategories = allCategories.filter(
    category => category.type === 'EXPENSE'
  );
  const incomeCategories = allCategories.filter(
    category => category.type === 'INCOME'
  );

  const initialValues = {
    transactionDate: '',
    type: selectedType,
    categoryId: '',
    comment: '',
    amount: '',
  };
  const handleSubmit = (value, { resetForm }) => {
    // console.log(value);
    const newData = {
      ...value,
      amount: `${
        value.type === 'EXPENSE'
          ? Number(value.amount) * -1
          : Number(value.amount)
      }`,
      type: value.type,
      categoryId: `${
        value.type === 'EXPENSE' ? selectedOption.id : incomeCategories[0].id
      }`,
    };
    dispatch(addTransactionThunk(newData));
    resetForm();
  };

  const handleChangeSelect = item => {
    setSelectedOption(item);
  };
  const selectOptionsData = expenseCategories.map(item => ({
    id: item.id,
    value: item.name,
    label: item.name,
  }));
  return (
    <ModalAddWrapper>
      <h3>Add transaction</h3>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <StyledForm>
          <div>
            <span>Income</span>
            <span>
              <input
                type="radio"
                name="type"
                id="INCOME"
                value="INCOME"
                defaultChecked
                onChange={e => setSelectedType(e.target.value)}
              />
              <input
                type="radio"
                name="type"
                id="EXPENSE"
                value="EXPENSE"
                onChange={e => setSelectedType(e.target.value)}
              />
            </span>
            <span>Expense</span>
          </div>
          {/* CustomSelect = ({(options, onChange)}) */}
          {selectedType === 'EXPENSE' && (
            <CustomSelect
              options={selectOptionsData}
              nameOfSelect="category"
              onChange={handleChangeSelect}
            />
          )}

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
            <Button
              text="CANCEL"
              variant="secondary"
              onClick={() => dispatch(closeModalAddTransaction())}
            />
          </ButtonWrapper>
        </StyledForm>
      </Formik>
    </ModalAddWrapper>
  );
};
