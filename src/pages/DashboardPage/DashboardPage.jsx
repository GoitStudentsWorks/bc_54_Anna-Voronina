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
import { closeModalAddTransaction, closeModalEditTransaction } from 'redux/global/globalSlice';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AsideBar } from 'components/AsideBar/AsideBar';
import { EditTransactions } from 'components/EditTransactions/EditTransactions';
import { Outlet } from 'react-router-dom';
import { StyledMain } from './DashboardPage.styled';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);

  return (
    <>
      <Header />
      <Container>
        <AsideBar />
        <StyledMain>
          <Outlet />
          {isModalAddOpen && (
            <Modal closeReducer={closeModalAddTransaction}>
              <ModalAddTransaction />
            </Modal>
          )}
          {isModalEditOpen && (
            <Modal closeReducer={closeModalEditTransaction}>
              <EditTransactions />
            </Modal>
          )}

          <RoundButton />
        </StyledMain>
      </Container>
    </>
  );
};

export default DashboardPage;
