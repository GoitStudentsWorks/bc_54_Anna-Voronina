import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import {
  selectPeriodTotal,
  selectTransactions,
} from 'redux/transaction/transactionSelectors';
import { getMonthAndYear } from 'services/getDateNow';
import {
  BalanceIcon,
  ContainerStyled,
  SpanStyled,
  TextStyled,
  TitleStyled,
} from './Balance.styled';

export const Balance = () => {
  const total = useSelector(selectPeriodTotal);
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const date = useRef(getMonthAndYear());
  useEffect(() => {
    dispatch(getSummaryThunk(date));
  }, [dispatch, transactions]);

  return (
    <ContainerStyled>
      <TitleStyled>Your balance</TitleStyled>
      <TextStyled>
        <BalanceIcon />
        <SpanStyled total={total}>{Number(total).toFixed(2)}</SpanStyled>
      </TextStyled>
    </ContainerStyled>
  );
};
