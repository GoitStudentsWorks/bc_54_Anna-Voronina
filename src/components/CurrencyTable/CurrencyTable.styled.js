import styled from 'styled-components';

export const CurrencyChartWrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.blue}; */
  /* background-color: #2F15B0;
  color: #fff;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal}; */
  /* padding: 0px; */
`;

export const CurrencyTableStyled = styled.table`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-style: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  thead {
    background-color: rgba(255, 255, 255, 0.2);
  }
  thead > tr {
    height: 56px;
    display: flex;
    gap: 50px;
    justify-content: space-between;
    padding-left: 62px;
  }
  th {
    width: 77px;
  }
  td {
    text-align: center;
  }
`;

export const CurrencyTableHead = styled.thead`
  th {
    max-width: 77px;
    height: 50px;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }

  th::before,
  th::after {
    content: '';
  }

  th::before {
  }

  th::after {
  }
`;

export const CurrencyTr = styled.tr`
  /* margin-left: 0px; */
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const CurrencyTh = styled.th`
  /* margin-left: 0px; */
`;
export const CurrencyTableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.blue};
  /* padding-left: 20px;
padding-right: 20px; */
`;
