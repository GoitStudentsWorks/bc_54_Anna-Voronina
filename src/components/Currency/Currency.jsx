import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from 'redux/currency/currencyOperations';
import { selectCurrencyData, selectCurrencyError, selectCurrencyIsLoading } from 'redux/currency/currencySelectors';

const CurrencyChart = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectCurrencyData);
  const loading = useSelector(selectCurrencyIsLoading);
  const error = useSelector(selectCurrencyError);

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const tableData = currencyData.map(item => ({
    currency: item.currencyCodeA,
    purchaseUSD: item.currencyCodeB === 840 ? item.rateBuy.toFixed(2) : '-',
    saleUSD: item.currencyCodeB === 840 ? item.rateSell.toFixed(2) : '-',
    purchaseEUR: item.currencyCodeB === 978 ? item.rateBuy.toFixed(2) : '-',
    saleEUR: item.currencyCodeB === 978 ? item.rateSell.toFixed(2) : '-',
  }));

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase (USD)</th>
            <th>Sale (USD)</th>
            <th>Purchase (EUR)</th>
            <th>Sale (EUR)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.currency}>
              <td>{item.currency}</td>
              <td>{item.purchaseUSD}</td>
              <td>{item.saleUSD}</td>
              <td>{item.purchaseEUR}</td>
              <td>{item.saleEUR}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Line data={tableData} />
    </div>
  );
};

export default CurrencyChart;
