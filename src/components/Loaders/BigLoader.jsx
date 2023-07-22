import { Triangle } from 'react-loader-spinner';

export const BigLoader = () => {
  return (
    <Triangle
      height="200"
      width="200"
      color="#FFB627"
      ariaLabel="triangle-loading"
      wrapperStyle={{ fontSize: '50px' }}
      wrapperClassName={'Loader'}
      visible={true}
    />
  );
};
