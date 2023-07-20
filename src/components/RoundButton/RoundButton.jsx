import React from 'react';
import { RoundedWrap } from './RondButton.styled';
import plusIcon from '../../assets/images/sprite.svg#icon-plus';
import { openModalAddTransaction } from 'redux/global/globalSlice';
import { useDispatch } from 'react-redux';

export const RoundButton = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };
  return <RoundedWrap onClick={handleOpenModal}>+</RoundedWrap>;
};
