import { Navigation } from 'components/Navigation/Navigation';
import { StyledAside } from './AsideBar.styled';
import { Currency } from 'components/Currency/Currency';

export const AsideBar = () => {
  return (
    <StyledAside>
      <Navigation />
      <Currency />
    </StyledAside>
  );
};
