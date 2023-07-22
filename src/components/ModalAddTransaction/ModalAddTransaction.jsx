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
  ExpenseBtn,
  ExpenseSpan,
  IncomeBtn,
  IncomeSpan,
  InputWrapper,
  MinusButton,
  ModalAddWrapper,
  ModalTransactionTitle,
  PlusButton,
  RadioWrapper,
  RadioWrapperChoose,
  StyledField,
  StyledForm,
  StyledInp,
  StyledLabelWrapper,
} from './ModalAddTransaction.styled';
import { useCategoriesType } from 'hooks/categoriesFilter';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('Car');
  const [selectedType, setSelectedType] = useState('INCOME');

  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const allCategories = useSelector(selectCategories);
  const [expenseCategories, incomeCategories] =
    useCategoriesType(allCategories);

  const initialValues = {
    transactionDate: new Date().toISOString().slice(0, 10),
    type: selectedType,
    categoryId: '',
    comment: '',
    amount: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    const defCategoryId = 'c9d9e447-1b83-4238-8712-edc77b18b739';
    const newData = {
      ...value,
      type: selectedType,
      amount: `${
        selectedType === 'EXPENSE'
          ? Number(value.amount) * -1
          : Number(value.amount)
      }`,
      categoryId: `${
        selectedType === 'EXPENSE'
          ? selectedOption?.id ?? defCategoryId
          : incomeCategories[0].id
      }`,
    };
    dispatch(addTransactionThunk(newData));
    dispatch(closeModalAddTransaction());
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
      <ModalTransactionTitle>Add transaction</ModalTransactionTitle>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <StyledForm>
          {/* ========================= Radio Buttons ========================= */}
          <RadioWrapperChoose>
            <IncomeSpan isSelected={selectedType === 'INCOME'}>
              Income
            </IncomeSpan>
            <RadioWrapper>
              <StyledInp
                type="radio"
                name="type"
                id="INCOME"
                value="INCOME"
                defaultChecked
                onChange={e => setSelectedType(e.target.value)}
              />
              <StyledLabelWrapper htmlFor="INCOME">
                {selectedType === 'INCOME' && (
                  <IncomeBtn>
                    <PlusButton />
                  </IncomeBtn>
                )}
              </StyledLabelWrapper>
              <StyledInp
                type="radio"
                name="type"
                id="EXPENSE"
                value="EXPENSE"
                onChange={e => setSelectedType(e.target.value)}
              />
              <StyledLabelWrapper htmlFor="EXPENSE">
                {selectedType === 'EXPENSE' && (
                  <ExpenseBtn>
                    <MinusButton />
                  </ExpenseBtn>
                )}
              </StyledLabelWrapper>
            </RadioWrapper>
            <ExpenseSpan isSelected={selectedType === 'EXPENSE'}>
              Expense
            </ExpenseSpan>
          </RadioWrapperChoose>

          {/* ========================= SELECT ========================= */}
          {selectedType === 'EXPENSE' && (
            <CustomSelect
              options={selectOptionsData}
              nameOfSelect="category"
              onChange={handleChangeSelect}
            />
          )}

          {/* ========================= INPUTS ========================= */}
          <InputWrapper>
            <StyledField
              type="number"
              name="amount"
              placeholder="0.00"
              weight="600"
              required
            />
            <StyledField type="date" name="transactionDate" />
          </InputWrapper>
          <StyledField type="text" name="comment" placeholder="Comment" />

          {/* ========================= BUTTONS ========================= */}
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
