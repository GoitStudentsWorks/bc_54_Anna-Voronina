import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    overflow: auto;
    padding-left: 20px;
    padding-right: 20px;
    height: 100vh;
  }
  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    height: 57vh;
  }
`;
