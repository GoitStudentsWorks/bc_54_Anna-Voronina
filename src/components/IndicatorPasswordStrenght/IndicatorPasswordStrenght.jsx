import { usePasswordStrength } from 'hook/usePasswordStrength';
import { PasswordStrengthIndicator, PasswordStrengthText } from './IndicatorPasswordStrenghtatyled';

export const IndicatorPasswordStrenghtatyled = ({ values }) => {
  const { getPasswordStrengthWidth, getPasswordStrengthColor, getPasswordStrengthText } =
    usePasswordStrength();
  console.log(values);
  return (
    <>
      <PasswordStrengthIndicator
        width={getPasswordStrengthWidth(values.password)}
        color={getPasswordStrengthColor(values.password)}
      />
      <PasswordStrengthText color={getPasswordStrengthColor(values.password)}>
        {getPasswordStrengthText(values.password)}
      </PasswordStrengthText>
    </>
  );
};
