import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import {
  Backdrop,
  ExitModalBtn,
  IconCloseModal,
  ModalStyled,
} from './Modal.styled';
const modalContainer = document.getElementById('modal');

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModalAddTransaction());
  };
  return createPortal(
    <Backdrop>
      <ModalStyled>
        <IconCloseModal onClick={handleCloseModal}>
          <ExitModalBtn />
        </IconCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
