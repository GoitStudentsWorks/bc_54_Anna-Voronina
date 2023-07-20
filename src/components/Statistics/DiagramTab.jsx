import React, { useEffect, useState } from 'react';
import { Chart } from './Chart/Chart';
import { Selects } from './Select/Select';
import {
  StyledSelectWrapper,
  StyledWrapperLeft,
  StyledWrapperRight,
  Wrapper,
} from './DiagramTab.styled';
import { Table } from './Table/Table';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesSummary } from 'redux/transaction/transactionSelectors';
import { getRandomHexColor } from 'services/randomColor/randomColor';

export const DiagramTab = () => {
  const categorySummary = useSelector(selectCategoriesSummary);
  const [date, setDate] = useState({});
  const dispatch = useDispatch();
  const randomColor = getRandomHexColor();

  const getSelectData = value => {
    // setDate(value);
    console.log(value);
  };

  // useEffect(() => {
  //   dispatch(getSummaryThunk(date));
  // }, [dispatch, date]);

  //Stepka@Stepka.com
  //Stepka123
  return (
    <Wrapper>
      <StyledWrapperLeft>
        <h1>Statistics</h1>
        <Chart resp={categorySummary} randomColors={randomColor} />
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <StyledSelectWrapper>
          <Selects onChange={getSelectData} />
        </StyledSelectWrapper>
        <Table data={categorySummary} randomColors={randomColor} />
      </StyledWrapperRight>
    </Wrapper>
  );
};
