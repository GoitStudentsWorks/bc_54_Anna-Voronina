import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transaction/transactionSelectors';
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
  TableDash,
  TableWrapper,
  AllTransactionsDetails,
} from './Transactions.styled';
// import { formatMoney } from 'utils/formatMoney';

import { useEffect } from 'react';
import {
  getTransactionsCategoriesThunk,
  getAllTransactionsThunk,
  delTransactionThunk,
} from 'redux/transaction/transactionOperations';
import { Button } from 'components/Button/Button';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { selectIsModalLogoutOpen } from 'redux/global/globalSelectors';
import {
  openModalEditTransaction,
  setUpdatedTransaction,
} from 'redux/global/globalSlice';
import { LiaPenAltSolid } from 'react-icons/lia';
// import { formatMoney } from 'format-money-js';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getTransactionsCategoriesThunk());
  }, [dispatch]);

  const sortedTransactions = [...transactions].sort((a, b) => {
    return b.transactionDate - a.transactionDate;
  });

  const handleEditClick = obj => {
    // dispatch(openModalEditTransaction(object));
    dispatch(setUpdatedTransaction(obj));
    dispatch(openModalEditTransaction());
  }; // wait till adding real data will be able to addd and if there are bugs, fix them

  const handleDeleteTransaction = id => {
    dispatch(delTransactionThunk(id)).then(dispatch(getAllTransactionsThunk()));
    console.log(id);
    // dispatch(getAllTransactionsThunk());
  }; // wait till adding real data will be able to addd and if there are bugs, fix them

  return sortedTransactions.length ? (
    <>
      <MediaQuery maxWidth={767}>
        <AllTransactionsDetails>
          {sortedTransactions.map(transaction => {
            return (
              <li key={transaction.id}>
                <TransactionDetails>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Date
                    </TransactionDetailsItemTitle>
                    <td>{transaction.transactionDate}</td>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Type
                    </TransactionDetailsItemTitle>
                    <td>{transaction.type ?? '-'}</td>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Category
                    </TransactionDetailsItemTitle>
                    <td>
                      {
                        categories.find(
                          cat => cat.id === transaction.categoryId
                        )?.name
                      }
                    </td>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Comment
                    </TransactionDetailsItemTitle>
                    <td>{transaction.comment}</td>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Sum
                    </TransactionDetailsItemTitle>
                    <Sum
                      color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                      // make this check work and add normal styles
                    >
                      {transaction.amount}
                    </Sum>
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
                      {<LiaPenAltSolid />} Edit
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
          <Table>
            <thead>
              <TableHead>
                <TableHeader>Date</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Comment</TableHeader>
                <TableHeader>Sum</TableHeader>
              </TableHead>
            </thead>

            <tbody>
              {sortedTransactions.map(transaction => {
                return (
                  <TableRow key={transaction.id}>
                    <TableDash>{transaction.transactionDate}</TableDash>
                    <TableDash>{transaction.type ?? '-'}</TableDash>
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
                      {transaction.amount}
                    </Sum>
                    {/* <TableDash> */}
                    <ButtonContainer>
                      <BtnEditTransaction
                        type="button"
                        onClick={() => handleEditClick(transaction)}
                      >
                        <LiaPenAltSolid fill="#fff" />
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
                    {/* </TableDash> */}
                    {/* <LiaPenAltSolid /> */}
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
