import React, { useState } from 'react';
import { Options, StyledSelect } from './SelectMonth.styled';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const SelectMonth = () => {
  const [month, setMonth] = useState();

  return (
    <StyledSelect value={month} onChange={e => setMonth(e.target.value)}>
      {months.map((el, idx) => (
        <Options key={idx}>{el}</Options>
      ))}
    </StyledSelect>
  );
};
