import styled from 'styled-components';
import bgImage from 'assets/images/bgLoginPage.png';

export const BgImage = styled.div`
  max-width: 1280px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  background-size: cover;
`;
