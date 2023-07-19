import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { closeModalLogout } from 'redux/global/globalSlice';
import { ModalContainer, ModalWraper } from './ModalLogOut.styled';

export const ModalLogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
  };

  const onCloseModal = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      dispatch(closeModalLogout());
    }
  };

  window.addEventListener('keydown', onCloseModal);

  return (
    <Modal>
      <ModalWraper onClick={onCloseModal}>
        <ModalContainer>
          <p>name, are you sure you want to log out?</p>
          <button onClick={() => dispatch(closeModalLogout())}>Cancel</button>
          <Button type="button" onClick={handleLogOut} text="Exit" />
        </ModalContainer>
      </ModalWraper>
    </Modal>
  );
};
