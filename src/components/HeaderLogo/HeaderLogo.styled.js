import styled from 'styled-components';

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleLogo = styled.h2`
  color: ${({ theme }) => theme.colors.primaryFont};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.2px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export const LogoHeader = styled.img`
  width: 18px;
  height: 18px;
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
`;
