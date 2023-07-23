import styled from 'styled-components';

export const ModalWrapper = styled.div``;

export const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 50px;
  margin-top: 70px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
  :hover {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.01);
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
`;

export const CloseBtn = styled.button``;
