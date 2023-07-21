import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavigationMobile } from './NavigationMobile';
import { NavigationDesktop } from './NavigationDesktop';

export const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

  return <>{isMobile ? <NavigationDesktop /> : <NavigationMobile />}</>;
};
