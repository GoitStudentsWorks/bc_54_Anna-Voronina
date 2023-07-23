import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    padding-left: 70px;
    padding-right: 28px;
  }
`;

export const StyledWrapperLeft = styled.div``;

export const StyledWrapperRight = styled.div`
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin-top: 28px;
  align-self: flex-start;

  @media only screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 20px;
    margin-left: 84px;
  }
`;
