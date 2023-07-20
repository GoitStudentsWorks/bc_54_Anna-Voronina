// import EditTransactions from 'components/EditTransactions/EditTransactions';
import EditTransactions from 'components/EditTransactions/EditTransactions';
import { ModalEdit } from 'components/EditTransactions/EditTransactions.styled';
import { Header } from 'components/Header/Header';

import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { RoundButton } from 'components/RoundButton/RoundButton';
import Transactions from 'components/Transactions/Transactions';
import { BtnEditTransaction } from 'components/Transactions/Transactions.styled';
import { useSelector } from 'react-redux';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from 'redux/global/globalSelectors';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);

  return (
    <>
      <Header />
      <Transactions />
      {isModalAddOpen && (
        <Modal>
          <ModalAddTransaction />
        </Modal>
      )}
      {isModalEditOpen && (
        <Modal>
          <EditTransactions />
        </Modal>
      )}
      <RoundButton />
    </>
  );
};

export default DashboardPage;
