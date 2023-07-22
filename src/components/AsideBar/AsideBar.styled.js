import styled from 'styled-components';

export const StyledAside = styled.aside`
  @media only screen and (min-width: 768px) {
    width: 480px;
  }

  @media only screen and (min-width: 1280px) {
    width: 480px;
    height: 100vh;
    border-right: 2px solid ${({ theme }) => theme.colors.secondaryFont};
    background: rgb(58, 36, 145);
    background: radial-gradient(
      circle,
      rgba(58, 36, 145, 1) 9%,
      rgba(63, 39, 120, 1) 65%,
      rgba(48, 34, 92, 1) 100%
    );
  }
`;
