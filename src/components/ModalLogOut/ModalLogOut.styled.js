import styled from 'styled-components';

export const ModalWraper = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const ModalContainer = styled.div`
  position: relative;

  width: 400px;
  height: 220px;
  border-radius: 8px;
  background-color: violet;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
  padding: 10px;

  @media screen and (min-width: 500px) {
    width: 400px;
    padding: 40px;

    flex-direction: column;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.05);
    color: orange;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media screen and (min-width: 320px) {
    flex-direction: row;
    gap: 40px;
    justify-content: flex-end;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;
