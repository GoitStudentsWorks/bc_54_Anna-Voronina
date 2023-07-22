import styled from 'styled-components';
import { LiaHryvniaSolid } from 'react-icons/lia';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  max-width: 280px;
  padding: 8px 32px 11.2px 32px;

  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  @media screen and (min-width: 768px) {
    margin: 28px 32px 20px 32px;
    padding: 8px 121px 11.2px 40px;
    max-width: 336px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 480px;
    margin: 28px 0 32px 0;
  }
`;

export const TitleStyled = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;

export const TextStyled = styled.p`
  display: flex;
  align-items: center;
`;

export const SpanStyled = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  color: ${({ total }) =>
    total < 0 ? 'rgb(255, 0, 0, 0.7)' : 'rgb(0, 255, 21, 0.7)'};
`;

export const BalanceIcon = styled(LiaHryvniaSolid)`
  width: 30px;
  height: 30px;
`;
