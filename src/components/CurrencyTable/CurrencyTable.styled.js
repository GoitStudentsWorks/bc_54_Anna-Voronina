import styled from 'styled-components';

export const CurrencyTableStyled = styled.table`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  thead {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: rgba(255, 255, 255, 0.2);
  }

  thead > tr {
    height: 56px;
  }

  th:first-child {
    padding-left: 30px;
  }

  th:last-child {
    padding-right: 80px;
  }

  th {
    width: 77px;
  }

  td {
    text-align: center;
  }
`;

export const CurrencyTableBody = styled.tbody`
  td {
    padding-top: 24px;
  }

  td:first-child {
    padding-left: 30px;
  }

  td:last-child {
    padding-right: 80px;
  }
`;
