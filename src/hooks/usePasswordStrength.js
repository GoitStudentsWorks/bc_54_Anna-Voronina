export const usePasswordStrength = () => {
  const getPasswordStrengthWidth = password => {
    if (password?.length >= 1 && password?.length <= 2) {
      return '10%';
    } else if (password?.length > 2 && password?.length <= 3) {
      return '20%';
    } else if (password?.length > 3 && password?.length <= 4) {
      return '30%';
    } else if (password?.length > 4 && password?.length <= 5) {
      return '40%';
    } else if (password?.length > 5 && password?.length <= 6) {
      return '50%';
    } else if (password?.length > 6 && password?.length <= 7) {
      return '60%';
    } else if (password?.length > 7 && password?.length <= 8) {
      return '70%';
    } else if (password?.length > 8 && password?.length <= 9) {
      return '80%';
    } else if (password?.length > 9 && password?.length <= 10) {
      return '90%';
    } else if (password?.length > 10 && password?.length <= 10) {
      return '100%';
    } else if (password?.length > 10) {
      return '100%';
    }
    return '0%';
  };

  const getPasswordStrengthColor = password => {
    if (password?.length >= 1 && password?.length <= 2) {
      return '#FD450B';
    } else if (password?.length > 2 && password?.length <= 3) {
      return '#FF6231';
    } else if (password?.length > 3 && password?.length <= 4) {
      return '#F37952';
    } else if (password?.length > 4 && password?.length <= 5) {
      return '#FC675D';
    } else if (password?.length > 5 && password?.length <= 6) {
      return '#F6C881';
    } else if (password?.length > 6 && password?.length <= 7) {
      return '#FBEC67';
    } else if (password?.length > 7 && password?.length <= 8) {
      return '#F8E32B';
    } else if (password?.length > 8 && password?.length <= 9) {
      return '#CAF98F';
    } else if (password?.length > 9 && password?.length <= 10) {
      return '#52E54F';
    } else if (password?.length > 10) {
      return '#099E06';
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
