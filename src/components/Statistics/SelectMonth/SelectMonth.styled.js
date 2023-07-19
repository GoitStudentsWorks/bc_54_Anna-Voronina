import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 280px;
  height: 50px;
  border-radius: 8px;
  background: rgba(74, 86, 226, 0.1);
  border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));

  color: var(--white, #fbfbfb);

  font-size: 18px;
  font-style: normal;
  padding-left: 20px;

  option {
    width: 280px;
    height: 157px;
  }
`;
