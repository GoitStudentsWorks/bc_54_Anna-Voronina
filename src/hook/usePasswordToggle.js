import { useState } from 'react';

export function usePasswordToggle(initialState = false) {
  const [showPassword1, setShowPassword1] = useState(initialState);
  const [showPassword2, setShowPassword2] = useState(initialState);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(prevShowPassword => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(prevShowPassword => !prevShowPassword);
  };

  return { showPassword1, showPassword2, togglePasswordVisibility1, togglePasswordVisibility2 };
}
