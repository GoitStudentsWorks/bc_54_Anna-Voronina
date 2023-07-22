import { useMediaQuery } from 'react-responsive';
import { Navigation } from 'components/Navigation/Navigation';
import { StyledAside } from './AsideBar.styled';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

export const AsideBar = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <StyledAside>
      <Navigation />
      {isTablet && <Balance />}
      {isTablet && <Currency />}
    </StyledAside>
  );
};
