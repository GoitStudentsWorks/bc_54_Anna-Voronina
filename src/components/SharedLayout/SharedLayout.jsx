import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <main>
      {/* <Container> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {/* </Container> */}
    </main>
  );
};
