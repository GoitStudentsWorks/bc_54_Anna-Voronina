import CurrencyTable from 'components/CurrencyTable/CurrencyTable';
import { CurrencyWrapper } from './Currency.styled';
import { CurrencyChart } from 'components/CurrencyChart/CurrencyChart';

export const Currency = () => {
  return (
    <CurrencyWrapper>
      <CurrencyTable />
      <CurrencyChart />
    </CurrencyWrapper>
  );
};
