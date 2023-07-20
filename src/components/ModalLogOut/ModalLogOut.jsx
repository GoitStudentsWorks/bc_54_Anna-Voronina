import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { closeModalLogout } from 'redux/global/globalSlice';
import {
  ButtonWrapper,
  // CloseBtn,
  ModalContainer,
  ModalWraper,
  Title,
} from './ModalLogOut.styled';
// import { GrClose } from 'react-icons/gr';
import { selectUser } from 'redux/auth/authSelectors';

export const ModalLogOut = () => {
  const user = useSelector(selectUser);
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
          {/* <CloseBtn onClick={() => dispatch(closeModalLogout())}>
            <GrClose />
          </CloseBtn> */}
          <Title>{user.username}, are you sure you want to log out?</Title>
          <ButtonWrapper>
            <Button
              type="button"
              onClick={() => dispatch(closeModalLogout())}
              text="Cancel"
              variant={'secondary'}
            />
            <Button type="button" onClick={handleLogOut} text="Yeah, Exit" />
          </ButtonWrapper>
        </ModalContainer>
      </ModalWraper>
    </Modal>
  );
};
