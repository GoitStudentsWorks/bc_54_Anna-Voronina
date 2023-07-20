import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
  @media only screen and (min-width: 768px) {
    width: 336px;
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    width: 395px;
  }
`;

export const StyledWrapperLeft = styled.div`
  @media only screen and (min-width: 768px) {
  }
`;
export const StyledWrapperRight = styled.div`
  @media only screen and (min-width: 768px) {
  }
`;
