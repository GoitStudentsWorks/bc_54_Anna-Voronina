import React from 'react';
import { Chart } from './Chart/Chart';
import { SelectMonth } from './SelectMonth/SelectMonth';
import { SelectYear } from './SelectYear/SelectYear';
import { StyledSelectWrapper, Wrapper } from './Statistics.styled';
import { Category } from './Category/Category';

export const Statistics = () => {
  return (
    <Wrapper>
      <h1>Statistics</h1>
      <Chart />
      <StyledSelectWrapper>
        <SelectMonth />
        <SelectYear />
      </StyledSelectWrapper>

      <Category />
    </Wrapper>
  );
};
