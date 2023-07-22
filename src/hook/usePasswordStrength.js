export const usePasswordStrength = () => {
  const getPasswordStrengthWidth = password => {
    if (password?.length >= 2 && password?.length <= 6) {
      return '30%';
    } else if (password?.length > 6 && password?.length <= 10) {
      return '60%';
    } else if (password?.length > 10) {
      return '100%';
    }
    return '0%';
  };

  const getPasswordStrengthColor = password => {
    if (password?.length >= 2 && password?.length <= 6) {
      return '#F64337';
    } else if (password?.length > 6 && password?.length <= 10) {
      return '#FFB627';
    } else if (password?.length > 10) {
      return '#00AD84';
    }
    return 'transparent';
  };

  const getPasswordStrengthText = password => {
    if (password?.length >= 2 && password?.length <= 6) {
      return 'Weak Password';
    } else if (password?.length > 6 && password?.length <= 10) {
      return 'Medium Strength Password';
    } else if (password?.length > 10) {
      return 'Strong Password';
    }
    return '';
  };

  return {
    getPasswordStrengthWidth,
    getPasswordStrengthColor,
    getPasswordStrengthText,
  };
};
