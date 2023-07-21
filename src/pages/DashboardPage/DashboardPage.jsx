import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { Navigation } from 'components/Navigation/Navigation';
import { RoundButton } from 'components/RoundButton/RoundButton';
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
      {isModalAddOpen && (
        <Modal>
          <ModalAddTransaction />
        </Modal>
      )}
      <RoundButton />
      <Navigation />
    </>
  );
};

export default DashboardPage;
