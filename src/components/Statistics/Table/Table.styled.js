import styled from 'styled-components';
import { getRandomHexColor } from 'services/randomColor/randomColor';

export const WrapperTable = styled.table`
  width: 280px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 768px) {
    width: 395px;
  }
`;

export const StyledThead = styled.thead`
  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
  }

  width: 280px;
  height: 56px;
  padding: 0 16px;

  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 768px) {
    width: 395px;
  }
`;

export const StyledTbody = styled.tbody`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0;
  gap: 14px;

  tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }
`;

export const StyledSpan = styled.td`
  width: 24px;
  border-radius: 2px;
  /* background-color: ${getRandomHexColor()}; */
`;
