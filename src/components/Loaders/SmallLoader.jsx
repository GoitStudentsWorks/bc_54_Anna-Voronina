import { Triangle } from "react-loader-spinner";
import { SmallLoaderBox } from "./SmallLoader.styled";
import { theme } from 'services/styles/theme';

export const BigLoader = () => {
  return (
    <SmallLoaderBox>
      <Triangle
        height="50"
        width="50"
        color={theme.colors.blue}
        ariaLabel="triangle-loading"
        wrapperClassName=""
        visible={true}
      />
    </SmallLoaderBox>
  );
};
