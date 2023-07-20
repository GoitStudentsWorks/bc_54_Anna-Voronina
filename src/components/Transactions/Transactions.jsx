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

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  // const categories = useSelector(selectCategories);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(transactions);
    // dispatch(getAllTransactionsThunk());
    // dispatch(getTransactionsCategoriesThunk());
  }, []);

  const sortedTransactions = [
    ...transactions,
    { id: 1, date: 1, type: 1, category: 1, comment: 1, sum: 1 },
    { id: 2, date: 2, type: 2, category: 2, comment: 2, sum: 2 },
  ].sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  const handleEditClick = object => {
    dispatch(openModalEditTransaction(object));
  };
  const handleDeleteTransaction = id => {
    dispatch(delTransactionThunk(id));
  };

  return sortedTransactions.length ? (
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
                    <td>{transaction.date}</td>
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
                    <td>{transaction.category}</td>
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
                    <SumText color="#fff">{transaction.sum}</SumText>
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
                      onClick={() => handleDeleteTransaction(transaction.id)}
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
                  <TableDash>{transaction.date}</TableDash>
                  <TableDash>{transaction.type ?? '-'}</TableDash>
                  <TableDash>{transaction.category}</TableDash>
                  <TableDash>{transaction.comment}</TableDash>
                  <Sum>{transaction.sum}</Sum>
                  <ButtonContainer>
                    <BtnEditTransaction type="button" onClick={handleEditClick}>
                      <StyledBiPencil />
                    </BtnEditTransaction>
                    <ButtonDelTransaction
                      type="button"
                      onClick={() => handleDeleteTransaction(transaction.id)}
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
    <NoTransactions>
      No transactions yet! Add them by pressing "+" button
    </NoTransactions>
  );
};

export default Transactions;
