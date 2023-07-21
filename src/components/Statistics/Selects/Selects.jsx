import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { StyledSelectWrapper } from './Selects.styled';


const months = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

const years = [
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2022',
    label: '2022',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2020',
    label: '2020',
  },
];

export const Selects = ({ onChange }) => {
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
    <StyledSelectWrapper>
      <CustomSelect options={months} nameOfSelect={'month'} onChange={null} />
      <CustomSelect options={years} nameOfSelect={'year'} onChange={null} />
    </StyledSelectWrapper>
  );
};
