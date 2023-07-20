import { useSelector } from 'react-redux';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { RoundButton } from 'components/RoundButton/RoundButton';
import { selectIsModalAddTransactionOpen } from 'redux/global/globalSelectors';
import { closeModalAddTransaction } from 'redux/global/globalSlice';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  return (
    <>
      <Header />
      {isModalAddOpen && (
        <Modal closeReducer={closeModalAddTransaction}>
          <ModalAddTransaction />
        </Modal>
      )}
      <RoundButton />
      <CustomSelect />
    </>
  );
};

export default DashboardPage;
