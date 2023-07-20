import React, { useEffect, useState } from 'react';
import { Options, StyledSelect } from './Select.styled';
import { useDispatch } from 'react-redux';

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

const years = [2023, 2022, 2021];

export const Select = ({ onChange }) => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);
  const selectData = { year: setYear, month: setMonth };

  // console.log(normMonth);

  const handleChangeMonth = ({ target }) => {
    const normMonth = new Date(`${target.value} 1, ${year}`).getMonth() + 1;
    setMonth(target.value);
    onChange({
      month: normMonth,
      year,
    });
  };
  const handleChangeYear = ({ target }) => {
    const normMonth = new Date(`${month} 1, ${year}`).getMonth() + 1;
    const normYear = Number(target.value);
    setYear(normYear);
    onChange({
      month: normMonth,
      year: normYear,
    });
  };


  return (
    <>
      <StyledSelect value={month} name="month" onChange={handleChangeMonth}>
        {months.map((el, idx) => (
          <Options key={idx}>{el}</Options>
        ))}
      </StyledSelect>
      <StyledSelect value={year} name="year" onChange={handleChangeYear}>
        {years.map((el, idx) => (
          <Options key={idx}>{el}</Options>
        ))}
      </StyledSelect>
    </>
  );
};
