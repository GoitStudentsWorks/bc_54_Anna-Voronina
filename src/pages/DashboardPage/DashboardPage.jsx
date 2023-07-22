import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from 'redux/global/globalSelectors';
import {
  closeModalAddTransaction,
  closeModalEditTransaction,
} from 'redux/global/globalSlice';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AsideBar } from 'components/AsideBar/AsideBar';
import { EditTransactions } from 'components/EditTransactions/EditTransactions';
import { StyledMain } from './DashboardPage.styled';
import { BigLoader } from 'components/Loaders/BigLoader';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);
  const loaderStyles = {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -70%)',
  };

  return (
    <>
      <Header />
      <Container>
        <AsideBar />
        <StyledMain>
          <Suspense fallback={<BigLoader styles={loaderStyles} />}>
            <Outlet />
          </Suspense>
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
        </StyledMain>
      </Container>
    </>
  );
};

export default DashboardPage;
