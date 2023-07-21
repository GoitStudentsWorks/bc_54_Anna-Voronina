import { Button } from 'components/Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { closeModalLogout } from 'redux/global/globalSlice';
import {
  ButtonWrapper,
  ModalContainer,
  ModalWraper,
  Title,
} from './ModalLogOut.styled';
import { selectUser } from 'redux/auth/authSelectors';

export const ModalLogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
  };

  return (
    <ModalWraper>
      <ModalContainer>
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
  );
};
