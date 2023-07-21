import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyRatesAsync } from 'redux/currency/currencyOperations';
import { selectCurrencyData } from 'redux/currency/currencySelectors';
import {
  CurrencyChartWrapper,
  CurrencyTableBody,
  CurrencyTableHead,
  CurrencyTableStyled,
  CurrencyTh,
  CurrencyTr,
} from './CurrencyTable.styled';


const CurrencyTable = () => {
  const dispatch = useDispatch();
  const { rates, loading, error } = useSelector(selectCurrencyData);

  useEffect(() => {
    dispatch(fetchCurrencyRatesAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const getCurrencyRates = () => {
    return rates;
  };

  const filteredRates = getCurrencyRates().filter(rate => {
    return (
      (rate.currencyCodeA === 840 && rate.currencyCodeB !== 978) ||
      (rate.currencyCodeA === 978 && rate.currencyCodeB !== 840)
    );
  });


  return (
    <>
      <CurrencyChartWrapper>
        <CurrencyTableStyled>
          <CurrencyTableHead>
            <CurrencyTr>
              <CurrencyTh>Currency</CurrencyTh>
              <CurrencyTh>Purchase</CurrencyTh>
              <CurrencyTh>Sale</CurrencyTh>
            </CurrencyTr>
          </CurrencyTableHead>
          <CurrencyTableBody>
            {filteredRates.map(rate => (
              <tr key={uuidv4()}>
                <td>{rate.currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
                <td>{rate.rateBuy.toFixed(2)}</td>
                <td>{rate.rateSell.toFixed(2)}</td>
              </tr>
            ))}
          </CurrencyTableBody>
        </CurrencyTableStyled>
      </CurrencyChartWrapper>
      
    </>
  );
};

export default CurrencyTable;
