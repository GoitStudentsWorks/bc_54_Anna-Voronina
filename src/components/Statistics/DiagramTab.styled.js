import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const StyledWrapperLeft = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 0px;
  }
`;
export const StyledWrapperRight = styled.div`
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  @media only screen and (min-width: 1280px) {
  }
`;
