import React, { useEffect, useState } from 'react';
import { Chart } from './Chart/Chart';
import { Selects } from './Selects/Selects';
import {
  StyledSelectWrapper,
  StyledTitle,
  StyledWrapperLeft,
  StyledWrapperRight,
  Wrapper,
} from './DiagramTab.styled';
import { Table } from './Table/Table';
import { getSummaryThunk } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesSummary } from 'redux/transaction/transactionSelectors';
import { color } from 'services/randomColor/randomColor';

const dataUser = [
  {
    name: 'Car',
    total: 1500,
  },
  {
    name: 'Product',
    total: 3700,
  },
  {
    name: 'Dog',
    total: 700,
  },
  {
    name: 'cat',
    total: 700,
  },
  {
    name: 'Car',
    total: 7500,
  },
];

export const DiagramTab = () => {
  const categorySummary = useSelector(selectCategoriesSummary);
  const [date, setDate] = useState({});
  const dispatch = useDispatch();
  const colors = color();
  console.log(colors);

  const getSelectData = value => {
    // setDate(value);
    console.log(value);
  };

  useEffect(() => {
    dispatch(getSummaryThunk(date));
  }, [dispatch, date]);

  //Stepka@Stepka.com
  //Stepka123

  return (
    <Wrapper>
      <StyledWrapperLeft>
        <StyledTitle>Statistics</StyledTitle>
        <Chart resp={categorySummary} colorStyle={colors} user={dataUser} />
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <Selects onChange={getSelectData} />
        <Table data={categorySummary} colorStyle={colors} user={dataUser} />
      </StyledWrapperRight>
    </Wrapper>
  );
};
