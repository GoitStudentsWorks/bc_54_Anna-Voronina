import { Navigation } from 'components/Navigation/Navigation';
import { StyledAside } from './AsideBar.styled';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

export const AsideBar = () => {
  return (
    <StyledAside>
      <Navigation />
      <Balance />
      <Currency />
    </StyledAside>
  );
};
