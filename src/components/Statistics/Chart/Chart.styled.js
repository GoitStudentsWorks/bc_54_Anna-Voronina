import { LiaHryvniaSolid } from 'react-icons/lia';
import styled from 'styled-components';

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 280px;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const HrvnIcon = styled(LiaHryvniaSolid)`
  width: 20px;
  height: 20px;
`;
