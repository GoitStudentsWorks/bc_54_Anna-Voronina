import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
const modalContainer = document.getElementById('modal');

export const Modal = ({ children }) => {
  return createPortal(
    <Backdrop>
      <Modal>{children}</Modal>
    </Backdrop>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
