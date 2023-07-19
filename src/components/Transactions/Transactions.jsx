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
} from './Transactions.styled';
// import { formatMoney } from 'utils/formatMoney';
// import { MediaQuery } from 'components/MediaQuery/MediaQuery';
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
import { openModalEditTransaction } from 'redux/global/globalSlice';
// import { setUpdatedTransaction } from 'redux/global/slice';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  // const categories = useSelector(selectCategories);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(transactions);
    dispatch(getAllTransactionsThunk());
    dispatch(getTransactionsCategoriesThunk());
    console.log(transactions);
  }, []);

  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  const handleEditClick = object => {
    dispatch(openModalEditTransaction(object));
  };
  const handleDeleteTransaction = id => {
    dispatch(delTransactionThunk(id));
  };

  return transactions.length ? (
    <>
      <MediaQuery maxWidth={767}>
        <ul>
          {sortedTransactions.map(transaction => {
            return (
              <li key={transaction.id}>
                <TransactionDetails>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Date
                    </TransactionDetailsItemTitle>
                    <p>{transaction.date}</p>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Type
                    </TransactionDetailsItemTitle>
                    <p>{transaction.type ?? '-'}</p>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Category
                    </TransactionDetailsItemTitle>
                    <p>{transaction.category}</p>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Comment
                    </TransactionDetailsItemTitle>
                    <p>{transaction.comment}</p>
                  </TransactionDetailsItem>
                  <TransactionDetailsItem>
                    <TransactionDetailsItemTitle>
                      Sum
                    </TransactionDetailsItemTitle>
                    <SumText>{transaction.sum}</SumText>
                  </TransactionDetailsItem>
                  <ButtonContainer>
                    <ButtonEditTransaction
                      type="button"
                      onClick={handleEditClick(transaction)}
                    >
                      {((<StyledBiPencil />), 'Edit')}
                    </ButtonEditTransaction>
                    <ButtonDelTransaction
                      type="button"
                      onClick={handleDeleteTransaction(transaction.id)}
                      text="Delete"
                    />
                  </ButtonContainer>
                </TransactionDetails>
              </li>
            );
          })}
        </ul>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <Table>
          <TableHead>
            <TableHeader>Date</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Comment</TableHeader>
            <TableHeader>Sum</TableHeader>
          </TableHead>
          <TableBody>
            {sortedTransactions.map(transaction => {
              return (
                <TableRow key={transaction.id}>
                  <TableRow>
                    <TransactionDetailsItemTitle>
                      Date
                    </TransactionDetailsItemTitle>
                    <p>{transaction.date}</p>
                  </TableRow>
                  <TableRow>
                    <TransactionDetailsItemTitle>
                      Type
                    </TransactionDetailsItemTitle>
                    <p>{transaction.type ?? '-'}</p>
                  </TableRow>
                  <TableRow>
                    <h4>Category</h4>
                    <p>{transaction.category}</p>
                  </TableRow>
                  <TableRow>
                    <TransactionDetailsItemTitle>
                      Comment
                    </TransactionDetailsItemTitle>
                    <p>{transaction.comment}</p>
                  </TableRow>
                  <TableRow>
                    <TransactionDetailsItemTitle>
                      Sum
                    </TransactionDetailsItemTitle>
                    <Sum>{transaction.sum}</Sum>
                  </TableRow>
                  <ButtonContainer>
                    <BtnEditTransaction type="button" onClick={handleEditClick}>
                      <StyledBiPencil />
                    </BtnEditTransaction>
                    <ButtonDelTransaction
                      type="button"
                      onClick={handleDeleteTransaction(transaction.id)}
                      text="Delete"
                    />
                  </ButtonContainer>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </MediaQuery>
    </>
  ) : (
    <h1>No transactions yet! Add them by pressing "+" button</h1>
  );
};

export default Transactions;
