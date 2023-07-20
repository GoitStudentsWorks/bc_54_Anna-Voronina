import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 20px;
  align-items: center;
  background: linear-gradient(276deg, #2e1746 3.19%, #2e225f 100%);
`;

export const ExitContainer = styled.div`
  display: flex;
`;

export const ExitBtn = styled.button`
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: white;

  cursor: pointer;
`;
