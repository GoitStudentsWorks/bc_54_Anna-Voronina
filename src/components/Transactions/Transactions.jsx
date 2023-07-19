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
// import { setUpdatedTransaction } from 'redux/global/slice';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    // console.log(transactions);
    dispatch(getAllTransactionsThunk());
    dispatch(getTransactionsCategoriesThunk());
  }, []);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  // const handleEditClick = object => {
  //   dispatch(setUpdatedTransaction(object));
  // };
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
                <ul>
                  <li>
                    <h4>Date</h4>
                    <p>{transaction.date}</p>
                  </li>
                  <li>
                    <h4>Type</h4>
                    <p>{transaction.type ?? '-'}</p>
                  </li>
                  <li>
                    <h4>Category</h4>
                    <p>{transaction.category}</p>
                  </li>
                  <li>
                    <h4>Comment</h4>
                    <p>{transaction.comment}</p>
                  </li>
                  <li>
                    <h4>Sum</h4>
                    <p>{transaction.sum}</p>
                  </li>
                  <li>
                    <Button
                      type="button"
                      onClick={() => console.log(1)}
                      text={<StyledBiPencil />}
                    />
                    <Button
                      type="button"
                      onClick={handleDeleteTransaction(transaction.id)}
                      text="Delete"
                    />
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <tbody>
          <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </thead>
          {sortedTransactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>
                  <h4>Date</h4>
                  <p>{transaction.date}</p>
                </td>
                <td>
                  <h4>Type</h4>
                  <p>{transaction.type ?? '-'}</p>
                </td>
                <td>
                  <h4>Category</h4>
                  <p>{transaction.category}</p>
                </td>
                <td>
                  <h4>Comment</h4>
                  <p>{transaction.comment}</p>
                </td>
                <td>
                  <h4>Sum</h4>
                  <p>{transaction.sum}</p>
                </td>
                <td>
                  <Button
                    type="button"
                    onClick={() => console.log(1)}
                    text={<StyledBiPencil />} // svg in text prop
                  />
                  <Button
                    type="button"
                    onClick={handleDeleteTransaction(transaction.id)}
                    text="Delete"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </MediaQuery>
    </>
  ) : (
    <h1>No transactions yet. You can add them by putting "+" button</h1>
  );
};

export default Transactions;
