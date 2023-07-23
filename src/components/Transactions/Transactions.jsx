import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transaction/transactionSelectors';
import {
  TransactionDetails,
  TransactionDetailsItem,
  TransactionDetailsItemTitle,
  TableHead,
  TableHeader,
  Table,
  TableRow,
  Sum,
  ButtonContainer,
  ButtonEditTransaction,
  BtnEditTransaction,
  ButtonDelTransaction,
  NoTransactions,
  TableDash,
  TableWrapper,
  AllTransactionsDetails,
  SumEl,
  Thead,
  TableTop,
} from './Transactions.styled';
// import { formatMoney } from 'utils/formatMoney';

import { useEffect } from 'react';
import {
  getTransactionsCategoriesThunk,
  getAllTransactionsThunk,
  delTransactionThunk,
} from 'redux/transaction/transactionOperations';
import MediaQuery from 'react-responsive';
import {
  openModalEditTransaction,
  setUpdatedTransaction,
} from 'redux/global/globalSlice';
import { LiaPenSolid } from 'react-icons/lia';
import { getDateForSort } from 'services/getDateNow';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const sortedTransactions = [...transactions].sort((a, b) => {
    return (
      getDateForSort(b.transactionDate) - getDateForSort(a.transactionDate)
    );
  });

  const handleEditClick = obj => {
    // dispatch(openModalEditTransaction(object));
    dispatch(setUpdatedTransaction(obj));
    dispatch(openModalEditTransaction());
  }; // wait till adding real data will be able to addd and if there are bugs, fix them

  const handleDeleteTransaction = id => {
    dispatch(delTransactionThunk(id))
      .unwrap()
      .then(() => dispatch(getAllTransactionsThunk()));
    // dispatch(getAllTransactionsThunk());
  }; // wait till adding real data will be able to addd and if there are bugs, fix them
  const formatDate = date => {
    const transactionDate = new Date(date);
    const day = String(transactionDate.getDate()).padStart(2, '0');
    const month = String(transactionDate.getMonth() + 1).padStart(2, '0');
    const year = String(transactionDate.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  };

  return sortedTransactions.length ? (
    <>
      <MediaQuery maxWidth={767}>
        <AllTransactionsDetails>
          {sortedTransactions.map(transaction => {
            return (
              <li key={transaction.id}>
                <TransactionDetails
                  color={transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'}
                >
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Date
                    </TransactionDetailsItemTitle>
                    <span>
                      <span>
                        {formatDate(Date(transaction.transactionDate))}
                      </span>
                    </span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Type
                    </TransactionDetailsItemTitle>
                    <span>{transaction.type ?? '-'}</span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Category
                    </TransactionDetailsItemTitle>
                    <span>
                      {
                        categories.find(
                          cat => cat.id === transaction.categoryId
                        )?.name
                      }
                    </span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Comment
                    </TransactionDetailsItemTitle>
                    <span>{transaction.comment}</span>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Sum
                    </TransactionDetailsItemTitle>
                    <SumEl
                      color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                      // make this check work and add normal styles
                    >
                      {transaction.amount > 0
                        ? transaction.amount
                        : transaction.amount * -1}
                    </SumEl>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <ButtonDelTransaction
                      type="button"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >
                      Delete
                    </ButtonDelTransaction>
                    <ButtonEditTransaction
                      type="button"
                      onClick={() => handleEditClick(transaction)}
                    >
                      {<LiaPenSolid />} Edit
                    </ButtonEditTransaction>

                    {/* fix color of edit btn */}
                  </TransactionDetailsItem>
                </TransactionDetails>
              </li>
            );
          })}
        </AllTransactionsDetails>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <TableWrapper>
          <TableTop>
            <thead>
              <TableHead>
                <TableHeader>Date</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Comment</TableHeader>
                <TableHeader>Sum</TableHeader>
              </TableHead>
            </thead>
          </TableTop>
          <Table>
            <tbody>
              {sortedTransactions.map(transaction => {
                return (
                  <TableRow key={transaction.id}>
                    <TableDash>
                      {formatDate(Date(transaction.transactionDate))}
                    </TableDash>
                    <TableDash>
                      {transaction.type === 'INCOME' ? '+' : '-'}
                    </TableDash>
                    <TableDash>
                      {
                        categories.find(
                          cat => cat.id === transaction.categoryId
                        )?.name

                        // transaction.category
                        //   ? transaction.category?.name
                        //   : 'Income'
                      }
                    </TableDash>
                    <TableDash>{transaction.comment}</TableDash>
                    <Sum
                      color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                    >
                      {transaction.amount > 0
                        ? transaction.amount
                        : transaction.amount * -1}
                    </Sum>
                    {/* <TableDash> */}
                    <ButtonContainer>
                      <BtnEditTransaction
                        type="button"
                        onClick={() => handleEditClick(transaction)}
                      >
                        <LiaPenSolid fill="#fff" />
                      </BtnEditTransaction>
                    </ButtonContainer>
                    <ButtonContainer>
                      <ButtonDelTransaction
                        type="button"
                        onClick={() => handleDeleteTransaction(transaction.id)}
                      >
                        Delete
                      </ButtonDelTransaction>
                    </ButtonContainer>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
      </MediaQuery>
    </>
  ) : (
    <NoTransactions>
      No transactions yet! Add them by pressing "+" button
    </NoTransactions>
  );
};

export default Transactions;
