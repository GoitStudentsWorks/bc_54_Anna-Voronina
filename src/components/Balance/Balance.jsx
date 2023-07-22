import { HrvnIcon } from 'components/Statistics/Chart/Chart.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import {
  selectPeriodTotal,
  selectTransactions,
} from 'redux/transaction/transactionSelectors';
import { getMonthAndYear } from 'services/getDateNow';
import {
  ContainerStyled,
  SpanStyle,
  SpanStyled,
  TextStyled,
  TitleStyled,
} from './Balance.styled';

export const Balance = () => {
  const total = useSelector(selectPeriodTotal);
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const date = getMonthAndYear();
  useEffect(() => {
    dispatch(getSummaryThunk(date));
  }, [dispatch, transactions]);

  return (
    <ContainerStyled>
      <TitleStyled>Your balance</TitleStyled>
      <TextStyled>
        <HrvnIcon />
        <SpanStyled total={total}>{Number(total).toFixed(2)}</SpanStyled>
      </TextStyled>
    </ContainerStyled>
  );
};
