import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  /* padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto; */

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    /* padding-left: 32px;
    padding-right: 28px; */
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    max-width: 100vw;
    /* gap: 70px; */

    /* max-width: 1280px; */
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`;
