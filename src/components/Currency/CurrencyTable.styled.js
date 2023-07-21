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
background-color: #2F15B0;
  color: #fff;
  font-style: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  width: 100%;
  border-collapse: collapse;
`;

export const CurrencyTableHead = styled.thead`
  
  th {
    background-color: rgba(255, 255, 255, 0.2);
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
`

export const CurrencyTh = styled.th`
/* margin-left: 0px; */
`
export const CurrencyTableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.blue};
  /* padding-left: 20px;
padding-right: 20px; */
`;
