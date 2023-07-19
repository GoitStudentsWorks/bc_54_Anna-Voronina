import styled from 'styled-components';
import bgImage from 'assets/images/bgLoginPage.png';

export const BgImage = styled.div`
  max-width: 1280px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background: linear-gradient(46deg, rgba(142, 46, 121, 0.68) 0%, rgba(171, 51, 173, 0.68) 100%);
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  background: linear-gradient(220deg, #6d54eb 3.47%, #652392 90.06%);

  background: #302e8e;
  background-image: url(${bgImage});
  background-size: cover;

  /* Для мобильных устройств (ширина меньше 768px) */
  @media screen and (max-width: 768px) {
    background-image: none;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.73) 3.47%,
      rgba(101, 35, 146, 0.73) 90.06%
    );
    background: linear-gradient(220deg, #6d54eb 3.47%, #652392 90.06%);

    min-width: 320px;
    height: 568px;
  }

  /* Для планшетов (ширина от 768px до 1279px) */
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 768px;
  }
`;
