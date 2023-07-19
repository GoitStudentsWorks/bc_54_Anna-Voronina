import styled from 'styled-components';
import bgImage from 'assets/images/bgLoginPage.png';

export const BgImage = styled.div`
  max-width: 1280px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  background: linear-gradient(46deg, rgba(142, 46, 121, 0.68) 0%, rgba(171, 51, 173, 0.68) 100%);
  background: #302e8e;

  background-image: url(${bgImage});
  background-size: cover;
`;
