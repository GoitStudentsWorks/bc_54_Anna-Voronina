import React, { useState } from 'react';
import { StyledSelect } from '../SelectMonth/SelectMonth.styled';

const years = [2019, 2020, 2021, 2022, 2023];

export const SelectYear = () => {
  const [year, setYear] = useState();

  return (
    <StyledSelect value={year} onChange={e => setYear(e.target.value)}>
      {years.map((el, idx) => (
        <option key={idx}>{el}</option>
      ))}
    </StyledSelect>
  );
};
