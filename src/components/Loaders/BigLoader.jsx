import { CirclesWithBar } from 'react-loader-spinner';
import { theme } from 'services/styles/theme';
import { BigLoaderBox } from './BigLoader.styled';

export const BigLoader = () => {
  return (
    <BigLoaderBox>
      <CirclesWithBar
        height="200"
        width="200"
        color={theme.colors.blue}
        wrapperClass=""
        visible={true}
        outerCircleColor={theme.colors.violet}
        innerCircleColor={theme.colors.orange}
        barColor="gold"
        ariaLabel="circles-with-bar-loading"
      />
    </BigLoaderBox>
  );
};
