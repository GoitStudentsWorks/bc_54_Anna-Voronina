import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { updateThunk } from 'redux/transaction/transactionOperations';
import {
  selectTransaction,
  selectCategories,
} from 'redux/transaction/transactionSelectors';
// import { closeEditModal } from 'redux/global/slice';
// import 'flatpickr/dist/themes/material_green.css';
// import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { customStyles } from 'utils/selectStyle';
// import { Backdrop } from 'components/Backdrop/Backdrop'; // create backdrop in styled
import moment from 'moment';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { selectIsModalEditTransactionOpen } from 'redux/global/globalSelectors';
import { closeModalEditTransaction } from 'redux/global/globalSlice';
import { GrClose } from 'react-icons/gr';
const isOpen = useSelector(selectIsModalEditTransactionOpen);
const validationSchema = Yup.object({
  amount: Yup.number('must be a number').required(
    'Please enter amount of transaction'
  ),
});

export const EditTransactions = () => {
  const transaction = useSelector(selectTransaction);
  const initialValues =
    transaction.type === 'INCOME'
      ? {
          ...transaction,
          type: true,
        }
      : {
          ...transaction,
          type: false,
          amount: 0 - transaction.amount,
        };
  const categories = useSelector(selectCategories);
  const income = categories.find(el => el.type === 'INCOME');

  const filteredCategories = categories.filter(el => el.type !== 'INCOME');
  const options = filteredCategories.map(el => ({
    value: el.id,
    label: el.name,
  }));

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      const transactionDate = moment(values.transactionDate).format(
        'YYYY-MM-DD'
      );
      const updatedValues = {
        ...values,
        categoryId: values.type ? income.id : values.categoryId,
        amount: values.type ? Number(values.amount) : 0 - values.amount,
        type: values.type ? 'INCOME' : 'EXPENSE',
        id: initialValues.id,
        transactionDate,
      };
      dispatch(updateThunk(updatedValues));
    },
  });

  useEffect(() => {
    const onClose = event => {
      if (event.code === 'Escape') {
        dispatch(closeModalEditTransaction());
      }
    };
    window.addEventListener('keydown', onClose);
    return () => {
      window.removeEventListener('keydown', onClose);
    };
  }, [dispatch]); // from react icons

  // const closeBeckdrop = e => {
  //   if (e.target === e.currentTarget) {
  //     dispatch(closeEditModal());
  //   }
  // }; //add backdrop
  const closeBtn = () => {
    dispatch(closeModalEditTransaction());
  }; //add to Button component

  const { type, transactionDate, categoryId } = formik.values;

  return (
    // <Backdrop onClick={closeBeckdrop}>
    isOpen ? (
      <>
        <Modal>
          <button onClick={closeBtn} type="button">
            <GrClose />
          </button>

          <h1>Edit transactions</h1>
          <div>
            <Button
              type="button"
              onClick={() => {
                formik.setFieldValue('type', true);
              }}
              text="Income"
            />

            {/* slash between transactions type */}
            <p>/</p>
            <Button
              type="button"
              onClick={() => {
                formik.setFieldValue('type', false);
              }}
              text="Expense"
            />
          </div>

          <form className={css.form} onSubmit={formik.handleSubmit}>
            {!type && (
              <Select
                defaultValue={options.find(e => e.value === categoryId)}
                styles={customStyles}
                options={options}
                isDisabled={true}
                onChange={({ value }) => {
                  formik.setFieldValue('categoryId', value);
                }}
              />
            )}
            <div className={css.formBlock}>
              <input
                onChange={formik.handleChange}
                className={css.inputLine}
                type="text"
                name="amount"
                placeholder="Transaction amount"
                value={formik.values.amount}
              />

              <Flatpickr
                defaultValue={transactionDate}
                options={{
                  dateFormat: 'd.m.Y',
                  disableMobile: 'true',
                }}
                type="date"
                name="transactionDate"
                id="date"
                selected={transactionDate}
                onChange={val => {
                  formik.setFieldValue('transactionDate', val[0]);
                }}
              />
            </div>

            <input
              onChange={formik.handleChange}
              type="text"
              name="comment"
              placeholder="Comment"
              value={formik.values.comment}
            />

            <Button type="submit" text="SAVE" />
          </form>
          <Button onClick={closeBtn} type="button" text="CANCEL" />
        </Modal>
        {/* </Backdrop>*/}
      </>
    ) : null
  );
};
export default EditTransactions;
