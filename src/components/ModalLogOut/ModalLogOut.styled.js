import styled from 'styled-components';

export const ModalWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ModalContainer = styled.div``;

export const Title = styled.p`
  text-align: center;
  font-size: 50px;
  margin-top: 70px;
  @media screen and (max-width: 425px) {
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
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  /* @media screen and (min-width: 320px) {
    flex-direction: row;
    gap: 40px;
    justify-content: flex-end;
  } */
`;

export const CloseBtn = styled.button``;
