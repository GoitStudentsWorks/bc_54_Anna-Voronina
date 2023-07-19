import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import {
  TransactionDetails,
  TransactionDetailsItem,
  TransactionDetailsItemTitle,
  SumText,
  TableHead,
  TableHeader,
  TableBody,
  Table,
  TableRow,
  Sum,
  ButtonContainer,
  ButtonEditTransaction,
  BtnEditTransaction,
  ButtonDelTransaction,
  StyledBiPencil,
  NoTransactions,
} from './Transactions.styled';
import { formatMoney } from 'utils/formatMoney';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';
import { useEffect } from 'react';
import {
  categoriesThunk,
  getAllThunk,
  removeThunk,
} from 'redux/transactions/operation';
import { BtnAddTransaction } from 'components/BtnAddTransaction/BtnAddTransaction';
import { setUpdatedTransaction } from 'redux/global/slice';

export default function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getAllThunk());
    dispatch(categoriesThunk());
  }, [dispatch]);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  const handleEditClick = object => {
    dispatch(setUpdatedTransaction(object));
  };

  return (
    <>

    </>
  );
}