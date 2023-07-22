import styled from 'styled-components';

export const IndicatorWrapper = styled.div`
  height: 3px;
  background-color: ${props => (props.passwordsMatch ? 'green' : 'red')};
  transition: width 0.2s ease-in-out;
`;
