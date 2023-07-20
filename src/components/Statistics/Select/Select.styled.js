import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled.select`
  width: 280px;
  height: 50px;
  border-radius: 8px;
  background: rgba(74, 86, 226, 0.1);
  border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));

  color: var(--white, #fbfbfb);

  font-size: 18px;
  font-style: normal;
  padding-left: 20px;

  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 50px;
  }
  @media only screen and (min-width: 768px) {
    width: 185px;
    height: 50px;
  }

  option {
    width: 280px;
    height: 157px;
    //sctp
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 8px;

    background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 35.94%,
      rgba(106, 70, 165, 0.52) 61.04%,
      rgba(133, 93, 175, 0.13) 100%
    );
    /* background-color: rgb(83, 61, 186, 0.7), rgb(80, 48, 154, 0.7),
      rgb(106, 70, 165, 0.52), rgb(133, 93, 175, 0.13); */

    /* background-color: rgb(83, 61, 186, 0.7); */

    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  }
`;

export const Options = styled.option`
  width: 280px;
  height: 157px;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-radius: 8px;

  background-color: red;

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(50px); */

  /* background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 35.94%,
      rgba(106, 70, 165, 0.52) 61.04%,
      rgba(133, 93, 175, 0.13) 100%
    ); */
`;

// export const GradientOption = styled.option`
//   background: linear-gradient(
//     360deg,
//     rgba(83, 61, 186, 0.7) 0%,
//     rgba(80, 48, 154, 0.7) 35.94%,
//     rgba(106, 70, 165, 0.52) 61.04%,
//     rgba(133, 93, 175, 0.13) 100%
//   );
// `;
