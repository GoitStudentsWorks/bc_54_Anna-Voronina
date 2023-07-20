// import EditTransactions from 'components/EditTransactions/EditTransactions';
import EditTransactions from 'components/EditTransactions/EditTransactions';
import { Header } from 'components/Header/Header';
import Transactions from 'components/Transactions/Transactions';
import { useSelector } from 'react-redux';
import { selectIsModalEditTransactionOpen } from 'redux/global/globalSelectors';

const DashboardPage = () => {
  const isEditModalOpen = useSelector(selectIsModalEditTransactionOpen);
  return (
    <>
      <Header />
      <Transactions />
      {isEditModalOpen && <EditTransactions />}
    </>
  );
};

export default DashboardPage;
