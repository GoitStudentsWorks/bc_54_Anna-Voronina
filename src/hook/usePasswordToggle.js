import { useState } from 'react';

export function usePasswordToggle(initialState = false) {
  const [showPassword, setShowPassword] = useState(initialState);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return { showPassword, togglePasswordVisibility };
}
