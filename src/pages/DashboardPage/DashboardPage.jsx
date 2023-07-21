import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { RoundButton } from 'components/RoundButton/RoundButton';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from 'redux/global/globalSelectors';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import Transactions from 'components/Transactions/Transactions';
import EditTransactions from 'components/EditTransactions/EditTransactions';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Transactions />
          {isModalAddOpen && (
            <Modal closeReducer={closeModalAddTransaction}>
              <ModalAddTransaction />
            </Modal>
          )}
          {isModalEditOpen && <EditTransactions />}
          <RoundButton />
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;
