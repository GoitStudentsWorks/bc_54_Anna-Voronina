import React, { useEffect } from 'react';
import { Chart } from './Chart/Chart';
import { SelectMonth } from './SelectMonth/SelectMonth';
import { SelectYear } from './SelectYear/SelectYear';
import { StyledSelectWrapper, Wrapper } from './DiagramTab.styled';
import { Table } from './Table/Table';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesSummary,
  selectMonth,
  selectYear,
} from 'redux/transaction/transactionSelectors';

export const DiagramTab = () => {
  const getYear = useSelector(selectYear);
  const getMonth = useSelector(selectMonth);
  const categorySummary = useSelector(selectCategoriesSummary);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSummaryThunk({
        month: getYear,
        year: getMonth,
      })
    );
  }, [dispatch, getYear, getMonth]);

  return (
    <Wrapper>
      <h1>Statistics</h1>
      <Chart />
      <StyledSelectWrapper>
        <SelectMonth />
        <SelectYear />
      </StyledSelectWrapper>

      <Table data={categorySummary} />
    </Wrapper>
  );
};
