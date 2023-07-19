import styled from 'styled-components';

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.pink};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
