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
  font-size: 17px;
  font-style: normal;
  font-weight: 400;

  letter-spacing: 1.8px;

  cursor: pointer;
`;

export const LogoHeader = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;
