import styled from 'styled-components';

export const Backdrop = styled.div`
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;

export const Modal = styled.div`
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(64, 46, 155, 1) 35%,
    rgba(76, 50, 113, 1) 100%
  );
  width: ${({ theme }) => theme.spacing(135)};
`;
