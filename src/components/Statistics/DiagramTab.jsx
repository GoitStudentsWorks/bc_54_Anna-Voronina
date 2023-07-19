import React, { useEffect } from 'react';
import { Chart } from './Chart/Chart';
import { SelectMonth } from './SelectMonth/SelectMonth';
import { SelectYear } from './SelectYear/SelectYear';
import {
  StyledSelectWrapper,
  StyledWrapperLeft,
  StyledWrapperRight,
  Wrapper,
} from './DiagramTab.styled';
import { Table } from './Table/Table';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesSummary,
  selectMonth,
  selectYear,
} from 'redux/transaction/transactionSelectors';
import { getRandomHexColor } from 'services/randomColor/randomColor';

export const DiagramTab = () => {
  const getYear = useSelector(selectYear);
  const getMonth = useSelector(selectMonth);
  const categorySummary = useSelector(selectCategoriesSummary);

  const dispatch = useDispatch();
  const randomColor = getRandomHexColor();
  useEffect(() => {
    dispatch(
      getSummaryThunk({
        month: getYear,
        year: getMonth,
      })
    );
  }, [dispatch, getYear, getMonth]);

  //Stepka@Stepka.com
  //Stepka123
  return (
    <Wrapper>
      <StyledWrapperLeft>
        <h1>Statistics</h1>
        <Chart data={categorySummary} randomColors={randomColor} />
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <StyledSelectWrapper>
          <SelectMonth />
          <SelectYear />
        </StyledSelectWrapper>
        <Table data={categorySummary} randomColors={randomColor} />
      </StyledWrapperRight>
    </Wrapper>
  );
};
