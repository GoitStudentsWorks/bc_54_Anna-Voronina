import styled from 'styled-components';

export const WrapperTable = styled.table`
  width: 280px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const StyledThead = styled.thead`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 280px;
  height: 56px;
  padding: 0 16px;

  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  border-radius: 8px;
`;

export const StyledTbody = styled.tbody`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0;
  gap: 14px;

  tr {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
  }
`;
