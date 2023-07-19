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
// import { BtnAddTransaction } from 'components/BtnAddTransaction/BtnAddTransaction';
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

  return (
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
                <p>{transaction.type || '-'}</p>
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
              <div>
                <Button
                  type="button"
                  onClick={handleDeleteTransaction(transaction.id)}
                  text="Delete"
                />
                <Button
                  type="button"
                  onClick={() => console.log(1)}
                  text="Edit" // svg in text prop
                />
              </div>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Transactions;
