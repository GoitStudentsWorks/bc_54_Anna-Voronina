import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { RoundButton } from 'components/RoundButton/RoundButton';
import { selectIsModalAddTransactionOpen } from 'redux/global/globalSelectors';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);

  return (
    <>
      <Header />
      <main>
        <Container>
          {isModalAddOpen && (
            <Modal closeReducer={closeModalAddTransaction}>
              <ModalAddTransaction />
            </Modal>
          )}
          <RoundButton />
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;
