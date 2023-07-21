import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import {
  ButtonWrapper,
  InputWrapper,
  ModalAddWrapper,
  ModalTransactionTitle,
  RadioWrapperChoose,
  StyledField,
  StyledForm,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { Formik } from 'formik';
import React from 'react';
import { closeModalEditTransaction } from 'redux/global/globalSlice';

export const EditTransactions = () => {
  const dispatch = useDispatch();
  const initialValues = {
    transactionDate: '',
    type: '',
    categoryId: '',
    comment: '',
    amount: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);

    resetForm();
  };

  return (
    <ModalAddWrapper>
      <ModalTransactionTitle>Add transaction</ModalTransactionTitle>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <StyledForm>
          {/* ========================= Radio Buttons ========================= */}
          {/* <RadioWrapperChoose>
            <IncomeSpan isSelected={selectedType === 'INCOME'}>Income</IncomeSpan>
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
            <ExpenseSpan isSelected={selectedType === 'EXPENSE'}>Expense</ExpenseSpan>
          </RadioWrapperChoose> */}

          {/* ========================= SELECT ========================= */}
          {/* {selectedType === 'EXPENSE' && (
            <CustomSelect
              options={selectOptionsData}
              nameOfSelect="category"
              onChange={handleChangeSelect}
            />
          )} */}

          {/* ========================= INPUTS ========================= */}
          <InputWrapper>
            <StyledField type="number" name="amount" placeholder="0.00" weight="600" />
            <StyledField type="date" name="transactionDate" />
          </InputWrapper>
          <StyledField type="text" name="comment" placeholder="Comment" />

          {/* ========================= BUTTONS ========================= */}
          <ButtonWrapper>
            <Button text="save" type="submit" />
            <Button
              text="cancel"
              variant="secondary"
              onClick={() => dispatch(closeModalEditTransaction())}
            />
          </ButtonWrapper>
        </StyledForm>
      </Formik>
    </ModalAddWrapper>
  );
};

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Select from 'react-select';
// import {
//   editTransactionThunk,
//   updateThunk,
// } from 'redux/transaction/transactionOperations';
// import {
//   selectTransactions,
//   selectCategories,
// } from 'redux/transaction/transactionSelectors';
// // import { closeEditModal } from 'redux/global/slice';
// import 'flatpickr/dist/themes/material_green.css';
// import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/themes/material_green.css';
// import { customStyles } from './selectStyled';

// import moment from 'moment';
// import { Button } from 'components/Button/Button';

// import {
//   selectIsModalEditTransactionOpen,
//   selectTransaction,
// } from 'redux/global/globalSelectors';
// import { closeModalEditTransaction } from 'redux/global/globalSlice';

// import {
//   DiscardEditButton,
//   EditModalForm,
//   EditModalTitle,
//   EditModalToggle,
//   EditTransactionToggleWrapper,
//   FormBlockEditModal,
//   InputCommentEditModal,
//   InputLineEditModal,
//   ModalEdit,
// } from './EditTransactions.styled';
// import { Modal } from 'components/Modal/Modal';

// // const validationSchema = Yup.object({
// //   amount: Yup.number('must be a number').required(
// //     'Please enter amount of transaction'
// //   ),
// // });

// // export const EditTransactions = () => {
// //   const isOpen = useSelector(selectIsModalEditTransactionOpen);

// //   const transaction = useSelector(selectTransaction);
// //   const initialValues =
// //     transaction.type === 'INCOME'
// //       ? {
// //           ...transaction,
// //           type: true,
// //         }
// //       : {
// //           ...transaction,
// //           type: false,
// //           amount: 0 - transaction.amount,
// //         };
// //   const categories = useSelector(selectCategories);
// //   const income = categories.find(el => el.type === 'INCOME');

// //   const filteredCategories = categories.filter(el => el.type !== 'INCOME');
// //   const options = filteredCategories.map(el => ({
// //     value: el.id,
// //     label: el.name,
// //   }));

// //   const dispatch = useDispatch();

// //   const formik = useFormik({
// //     initialValues,
// //     validationSchema,
// //     onSubmit: values => {
// //       const transactionDate = moment(values.transactionDate).format(
// //         'YYYY-MM-DD'
// //       );
// //       const updatedValues = {
// //         ...values,
// //         categoryId: values.type ? income.id : values.categoryId,
// //         amount: values.type ? Number(values.amount) : 0 - values.amount,
// //         type: values.type ? 'INCOME' : 'EXPENSE',
// //         // id: initialValues.id,
// //         transactionDate,
// //       };
// //       dispatch(
// //         editTransactionThunk({
// //           transactionId: initialValues.id,
// //           transaction: updatedValues,
// //         })
// //       );
// //     },
// //   });

// //   useEffect(() => {
// //     const onClose = event => {
// //       if (event.code === 'Escape') {
// //         dispatch(closeModalEditTransaction());
// //       }
// //     };
// //     window.addEventListener('keydown', onClose);
// //     return () => {
// //       window.removeEventListener('keydown', onClose);
// //     };
// //   }, [dispatch]); // from react icons

// //   // const closeBeckdrop = e => {
// //   //   if (e.target === e.currentTarget) {
// //   //     dispatch(closeEditModal());
// //   //   }
// //   // }; //add backdrop
// //   const closeBtn = () => {
// //     dispatch(closeModalEditTransaction());
// //   }; //add to Button component

// //   const { type, transactionDate, categoryId } = formik.values;

// //   return (
// //     // <Backdrop onClick={closeBeckdrop}>
// //     isOpen ? (
// //       <>
// //         <Modal closeReducer={closeModalEditTransaction}>
// //           {/* add close on close btn */}
// //           <EditModalTitle>Edit transactions</EditModalTitle>
// //           <EditTransactionToggleWrapper>
// //             {/* add colors for toggle */}
// //             <EditModalToggle
// //               type="button"
// //               onClick={() => {
// //                 formik.setFieldValue('type', true);
// //               }}
// //             >
// //               Income
// //             </EditModalToggle>

// //             <p>/</p>
// //             <EditModalToggle
// //               type="button"
// //               onClick={() => {
// //                 formik.setFieldValue('type', false);
// //               }}
// //             >
// //               Expense
// //             </EditModalToggle>
// //           </EditTransactionToggleWrapper>
// //           <EditModalForm onSubmit={formik.handleSubmit}>
// //             {!type && (
// //               <Select
// //                 defaultValue={options.find(e => e.value === categoryId)}
// //                 styles={customStyles}
// //                 options={options}
// //                 isDisabled={true}
// //                 onChange={({ value }) => {
// //                   formik.setFieldValue('categoryId', value);
// //                 }}
// //               />
// //             )}

// //             <FormBlockEditModal>
// //               <InputLineEditModal
// //                 onChange={formik.handleChange}
// //                 type="text"
// //                 name="amount"
// //                 placeholder="Transaction amount"
// //                 value={formik.values.amount}
// //               />

// //               <Flatpickr
// //                 defaultValue={transactionDate}
// //                 options={{
// //                   dateFormat: 'd.m.Y',
// //                   disableMobile: 'true',
// //                 }}
// //                 type="date"
// //                 name="transactionDate"
// //                 id="date"
// //                 selected={transactionDate}
// //                 onChange={val => {
// //                   formik.setFieldValue('transactionDate', val[0]);
// //                 }}
// //               />
// //               {/* make flatpickr styled ang add svg to input. add wrapper with flex for transactionamount and flatpickr */}
// //             </FormBlockEditModal>

// //             <InputCommentEditModal
// //               onChange={formik.handleChange}
// //               type="text"
// //               name="comment"
// //               placeholder="Comment"
// //               value={formik.values.comment}
// //             />

// //             <Button type="submit" text="SAVE" />
// //           </EditModalForm>

// //           <DiscardEditButton onClick={closeBtn} type="button">
// //             CANCEL
// //           </DiscardEditButton>
// //           {/* fix width for discard btn */}
// //         </Modal>
// //         {/* </Backdrop>*/}
// //       </>
// //     ) : null
// //   );
// // };
// // export default EditTransactions;
