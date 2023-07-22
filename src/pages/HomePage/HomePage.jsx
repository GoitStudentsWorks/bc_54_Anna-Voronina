import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';
import { RoundButton } from 'components/RoundButton/RoundButton';
import Transactions from 'components/Transactions/Transactions';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div>
      {isMobile && <Balance />}
      <Transactions />
      <RoundButton />
    </div>
  );
};

export default HomePage;
